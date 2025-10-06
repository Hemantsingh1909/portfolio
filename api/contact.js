// api/contact.js
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  // NOTE: In Vercel Node funcs, body may be a string. Parse if needed.
  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body || "{}")
      : req.body || {};
  const { name, company, phone, email, message } = body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Missing required fields (name, email, message)" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const FROM = process.env.CONTACT_FROM_EMAIL; // e.g. no-reply@updates.hemantsatwal.in (verified in Resend)
  const TO = process.env.CONTACT_TO_EMAIL; // your receiving inbox

  try {
    // 1) Send to you
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
      .json({ error: err?.message || "Failed to send owner email" });
  }

  try {
    // 2) Auto-reply to sender (HTML + text)
    await resend.emails.send({
      from: `Hemant Satwal <${FROM}>`,
      to: [email],
      subject: "Thanks — we received your message",
      html: `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </head>
  <body style="margin:0; padding:0; background:#f5f5fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <!-- Container -->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px; width:100%; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 6px 18px rgba(13,12,20,0.08);">
            <!-- Top bar / Logo -->
            <tr>
              <td style="padding:20px 24px; text-align:left; background:linear-gradient(90deg, #6D28D9 0%, #5B21B6 100%);">
                <img src="/Users/hemantsingh/Developer/portfolio/dist/assets/email-banner.png" alt="Hemant Satwal" width="140" style="display:block; border:0; max-width:140px; height:auto;">
              </td>
            </tr>

            <!-- Hero Image -->
            <tr>
              <td style="padding:0;">
                <img src="https://www.hemantsatwal.in/assets/email-hero.jpg" alt="Thanks for contacting Hemant" width="600" style="width:100%; height:auto; display:block;">
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:28px 32px;">
                <h1 style="margin:0 0 12px 0; font-size:20px; line-height:1.2; color:#0f172a;">Hi ${name},</h1>
                <p style="margin:0 0 16px 0; color:#334155; font-size:15px;">
                  Thank you for reaching out — I’ve received your message and really appreciate your interest.
                </p>

                <!-- Message box -->
                <div style="margin:18px 0; padding:14px 16px; background:#fbfbff; border-left:4px solid #6D28D9; border-radius:6px; color:#334155;">
                  <strong style="display:block; margin-bottom:8px;">Your message</strong>
                  <div style="white-space:pre-wrap; font-size:14px; line-height:1.5;">${message}</div>
                </div>

                <p style="margin:0 0 18px 0; color:#334155; font-size:15px;">
                  I’ll review your inquiry and get back to you within 1–2 business days. If it’s urgent, you can reply to this email.
                </p>

                <!-- CTA -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:20px 0;">
                  <tr>
                    <td align="center">
                      <a href="https://www.hemantsatwal.in" target="_blank" rel="noopener" style="background:#6D28D9; color:#ffffff; text-decoration:none; padding:12px 22px; border-radius:8px; display:inline-block; font-weight:600; font-size:15px;">
                        View More
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:22px 0 0 0; color:#475569; font-size:14px;">
                  Best regards,<br>
                  <strong style="color:#0f172a;">Hemant Satwal</strong><br>
                  <a href="https://www.hemantsatwal.in" style="color:#6D28D9; text-decoration:none;">www.hemantsatwal.in</a>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:14px 18px; background:#fafafa; text-align:center; color:#94a3b8; font-size:12px;">
                You received this email because you contacted Hemant Satwal. If this wasn't you, please ignore this message.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `,
      text: `Hi ${name},

Thank you for reaching out — I’ve received your message and appreciate your interest.

Your message:
${message}

I will review your inquiry and get back to you within 1–2 business days. If this is urgent, please reply to this email.

Best regards,
Hemant Satwal
https://www.hemantsatwal.in`,
    });
  } catch (err) {
    console.error("Auto-reply failed:", err);
    // Not fatal for the user; still return ok so the form succeeds.
    return res.status(200).json({
      ok: true,
      note: "Owner mail sent; auto-reply failed",
      details: err?.message,
    });
  }

  return res.status(200).json({ ok: true });
}
