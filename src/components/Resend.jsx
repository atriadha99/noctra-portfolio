import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";

const sql = neon(process.env.DATABASE_URL!);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await sql`
      INSERT INTO contacts(name,email,message)
      VALUES(${name},${email},${message})
    `;

    await resend.emails.send({
      from: "Noctra <onboarding@resend.dev>",
      to: "atriadha.dev@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    return Response.json({
      success: true
    });
  } catch (error) {
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}