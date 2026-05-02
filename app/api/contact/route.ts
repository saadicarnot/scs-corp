import { NextResponse } from "next/server";

// Contact form API route stub
// Ready to wire to Resend, HubSpot, or any email provider

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, service, propertyType, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: false, error: "Bot detected" }, { status: 400 });
    }

    // Basic server-side validation
    if (!name || !email || !phone || !service || !propertyType || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // TODO: Wire to email provider (Resend, SendGrid, etc.)
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'SCS Corp <noreply@scscorp.biz>',
    //   to: ['NOC@scscorp.biz'],
    //   subject: `New enquiry from ${name} — ${service}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Property Type:</strong> ${propertyType}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      propertyType,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. We'll be in touch within one business day.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
