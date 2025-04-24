import { NextResponse } from 'next/server';

// You'll need to install a library like nodemailer or use an email API service
// import nodemailer from 'nodemailer'; // Example using nodemailer

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // --- !!! Email Sending Logic Placeholder !!! ---
    // This is where you would integrate your email sending service.
    // Replace this section with actual email sending code.
    // Example (conceptual, requires setup):
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: true, // use TLS
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM, // Sender address
      to: process.env.CONTACT_FORM_RECIPIENT_EMAIL, // Your recipient email address
      replyTo: email, // Set reply-to to the submitter's email
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    */
    // --- End Email Sending Logic Placeholder ---

    // For now, we just log it and return success
    // Replace this with actual email sending logic!
    const emailSentSuccessfully = true; // Assume success for now

    if (emailSentSuccessfully) {
      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } else {
      // If email sending failed in the actual implementation
      // return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
       return NextResponse.json({ message: 'Form submitted (email placeholder)' }, { status: 200 }); // Return success even though email not sent yet
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 