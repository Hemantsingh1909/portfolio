// pages/api/contact.js
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  let body =
    typeof req.body === "string"
      ? JSON.parse(req.body || "{}")
      : req.body || {};
  const { name, company, phone, email, message } = body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Missing required fields (name, email, message)" });
  }

  const {
    RESEND_API_KEY,
    CONTACT_FROM_EMAIL,
    CONTACT_TO_EMAIL,
    // Optional: specify a Drive/remote image URL here (or compute from ID)
    DRIVE_IMAGE_URL,
  } = process.env;

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Missing one or more required env vars.");
    return res.status(500).json({
      error:
        "Email service not configured. Check RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.",
    });
  }

  const resend = new Resend(RESEND_API_KEY);
  const FROM = CONTACT_FROM_EMAIL;
  const TO = CONTACT_TO_EMAIL;

  // --- 1) send owner email (no changes) ---
  try {
    await resend.emails.send({
      from: `Hemant Satwal <${FROM}>`,
      to: [TO],
      subject: `New message from ${name}`,
      reply_to: email,
      text: `Name: ${name}
Company: ${company || "-"}
Phone: ${phone || "-"}
Email: ${email}

Message:
${message}`,
    });
  } catch (err) {
    console.error("Owner email failed:", err);
    return res
      .status(500)
      .json({ error: "Failed to send owner email", details: String(err) });
  }

  // --- 2) auto-reply with inline attachment fetched from Drive (server-side) ---
  // Use DRIVE_IMAGE_URL env var (recommended) OR you can hardcode a Drive uc?export=view&id=... link
  const driveUrl =
    DRIVE_IMAGE_URL ||
    "https://drive.google.com/uc?export=view&id=1ATcW2oAjjTqnhhgN3F_pnfSENsdVRUne";

  // helper to fetch and convert to base64
  async function fetchImageAsBase64(url) {
    try {
      const fetchRes = await fetch(url, { redirect: "follow" });
      if (!fetchRes.ok) {
        throw new Error(
          `Fetch failed: ${fetchRes.status} ${fetchRes.statusText}`
        );
      }
      const contentType =
        fetchRes.headers.get("content-type") || "application/octet-stream";
      const arrayBuf = await fetchRes.arrayBuffer();
      const buffer = Buffer.from(arrayBuf);
      const sizeBytes = buffer.length;

      // safety check - adjust max as needed (here ~3MB)
      const MAX_BYTES = 3 * 1024 * 1024;
      if (sizeBytes > MAX_BYTES) {
        throw new Error(
          `Image too large (${Math.round(
            sizeBytes / 1024
          )} KB). Max allowed ${Math.round(MAX_BYTES / 1024)} KB`
        );
      }

      const base64 = buffer.toString("base64");
      return { base64, contentType, sizeBytes };
    } catch (err) {
      // bubble error up
      throw err;
    }
  }

  let attachmentsForAutoReply = [];
  try {
    // try to fetch the drive image and use as inline attachment
    const { base64, contentType, sizeBytes } = await fetchImageAsBase64(
      driveUrl
    );
    attachmentsForAutoReply.push({
      content: base64,
      filename: "hero-image",
      contentType,
      contentId: "hero-image",
    });
    console.log(
      `Fetched image from drive (${Math.round(
        sizeBytes / 1024
      )} KB) and attached as inline.`
    );
  } catch (err) {
    console.warn(
      "Could not fetch/attach Drive image for auto-reply:",
      String(err)
    );
    // Not fatal — we'll still send the auto-reply without the image
  }

  // prepare html that uses cid if available; fallback to no-image layout
  const htmlWithCid = `
    <!doctype html>
    <html>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial; color:#111; margin:0;">
      <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:8px;">
        ${
          attachmentsForAutoReply.length
            ? `<div style="text-align:center;"><img src="cid:hero-image" alt="hero" style="max-width:100%;height:auto;border-radius:8px;"></div>`
            : ""
        }
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out! We’ve received your message and appreciate your interest.</p>
        <div style="background:#fbfbff;border-left:4px solid #6D28D9;padding:12px;border-radius:6px;">
          <strong>Your message</strong>
          <div style="white-space:pre-wrap;margin-top:8px;">${message}</div>
        </div>
        <p>I’ll review your inquiry and get back to you within 1–2 business days.</p>
        <div style="text-align:center;margin:20px 0;">
          <a href="https://www.hemantsatwal.in" style="background:#6D28D9;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;display:inline-block;font-weight:600;">View More</a>
        </div>
        <p>Best regards,<br><strong>Hemant Satwal</strong><br><a href="https://www.hemantsatwal.in">www.hemantsatwal.in</a></p>
      </div>
    </body>
    </html>
  `;

  const textFallback = `Hi ${name},

Thank you for reaching out — I’ve received your message and appreciate your interest.

Your message:
${message}

I will review your inquiry and get back to you within 1–2 business days. If urgent, reply to this email.

Best regards,
Hemant Satwal
https://www.hemantsatwal.in`;

  // attempt sending auto-reply
  try {
    await resend.emails.send({
      from: `Hemant Satwal <${FROM}>`,
      to: [email],
      subject: "Thanks — we received your message",
      html: htmlWithCid,
      text: textFallback,
      attachments: attachmentsForAutoReply.length
        ? attachmentsForAutoReply
        : undefined,
    });
  } catch (err) {
    console.error("Auto-reply send failed:", err);
    // Not fatal for the form; return OK with a note so front-end knows email reached owner
    return res.status(200).json({
      ok: true,
      note: "Owner email sent; auto-reply failed to send",
      autoReplyError: String(err),
    });
  }

  return res.status(200).json({ ok: true });
}
