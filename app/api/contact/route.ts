import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  await resend.emails.send({
    from: 'Arkanaweb <onboarding@resend.dev>',
    to: ['workarleyxa@gmail.com'],
    subject: subject || 'New Contact Message',
    html: `
      <h3>New Message from Arkanaweb</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });

  console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "ADA" : "TIDAK ADA");

  return Response.json({ success: true });
}
