import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      location,
      message,
    } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      // In development, simulate success so local testing doesn't block on secrets
      if (process.env.NODE_ENV !== "production") {
        console.warn("[contact] RESEND_API_KEY missing; simulating email send in development.");
        return NextResponse.json({ ok: true, simulated: true });
      }
      // In production, require proper configuration
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const subject = `New Inquiry from ${name}${eventType ? ` • ${eventType}` : ""}`;
  const toEmail = process.env.CONTACT_TO_EMAIL || "aayush1628jaat@gmail.com";
  // Use Resend onboarding address by default for safer dev/testing
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Acme <onboarding@resend.dev>";

    const html = `
      <div>
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${eventType ? `<p><strong>Service:</strong> ${escapeHtml(eventType)}</p>` : ""}
        ${eventDate ? `<p><strong>Event Date:</strong> ${escapeHtml(eventDate)}</p>` : ""}
        ${location ? `<p><strong>Location:</strong> ${escapeHtml(location)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      </div>
    `;

  const resend = new Resend(process.env.RESEND_API_KEY as string);
  const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
