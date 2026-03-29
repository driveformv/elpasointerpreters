import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@elpasointerpreters.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, company, email, phone, dateNeeded, serviceType, description } =
      body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Send notification to business
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "El Paso Interpreters <bookings@elpasointerpreters.com>",
      to: [CONTACT_EMAIL],
      subject: `New Interpreter Request: ${serviceType || "General"} - ${fullName}`,
      html: `
        <h2>New Interpreter Booking Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${fullName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company || "N/A"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Date Needed</td><td style="padding:8px;border-bottom:1px solid #eee;">${dateNeeded || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${serviceType || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Description</td><td style="padding:8px;border-bottom:1px solid #eee;">${description || "None provided"}</td></tr>
        </table>
      `,
    });

    // Send confirmation to client
    await resend.emails.send({
      from: "El Paso Interpreters <bookings@elpasointerpreters.com>",
      to: [email],
      subject: "We received your interpreter request",
      html: `
        <h2 style="color:#1B365D;">Thank you, ${fullName}.</h2>
        <p>We received your request for <strong>${serviceType || "interpretation"}</strong> services${dateNeeded ? ` on ${dateNeeded}` : ""}.</p>
        <p>Our scheduling team will contact you within 60 minutes during business hours (Mon-Fri, 8 AM - 6 PM MT).</p>
        <p>If you need immediate assistance, call us at <strong>(915) 555-0100</strong>.</p>
        <br/>
        <p style="color:#666;font-size:12px;">El Paso Interpreters<br/>El Paso, TX 79901<br/>(915) 555-0100</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}
