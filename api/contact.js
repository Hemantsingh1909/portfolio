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
    // 2) Auto-reply to sender
    await resend.emails.send({
      from: `Hemant Satwal <${FROM}>`,
      to: [email],
      subject: "Thank you for contacting us",
      text: `Hi ${name},

Thank you for reaching out! We’ve received your message and appriciate your interest:

"${message}"

Our team will review your inquiry and will get back to you as soon as possible, typically within 1-2 business days.

- Regards,
Hemant Satwal  
(www.hemantsatwal.in)`,
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
