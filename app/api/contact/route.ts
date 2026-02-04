import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
        from: 'Arkanaweb <onboarding@resend.dev>',
        to: ['mohamad.arleyxa19@smk.belajar.id'],
        subject: subject || 'New Contact Message',
        html: `
      <h3>New Message from Arkanaweb</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
    });

    return Response.json({ success: true });
}
