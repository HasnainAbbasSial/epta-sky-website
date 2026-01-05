"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Anti-Spam Validation
  const honeypot = formData.get("b_phone") as string;
  const captcha = formData.get("captcha") as string;
  const captchaExpected = formData.get("captchaExpected") as string;

  if (honeypot) {
    console.warn("Spam detected via honeypot field.");
    return { success: false, error: "Spam detected." };
  }

  if (captcha !== captchaExpected) {
    return { success: false, error: "Verification failed. Please try again." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Epta Sky <noreply@eptasky.com>',
      to: ['contact@eptasky.com'],
      subject: `New Lead: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    console.log("Email sent successfully:", data);
    return { success: true };
  } catch (err) {
    console.error("Internal Error:", err);
    return { success: false, error: "Internal server error" };
  }
}
