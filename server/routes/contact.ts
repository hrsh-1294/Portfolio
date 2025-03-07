
import { Router } from 'express';
import * as nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

const router = Router();

router.post('/api/contact', async (req, res) => {

  try {
    const { name, email, message } = req.body;

    console.log("Received contact form data:", { name, email, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,  // Keep this your email (to avoid spam filters)
      to: process.env.EMAIL_USER,    // You receive the email
      subject: `Portfolio Contact from ${name}`,
      text: `You have received a new message:\n\n
      Name: ${name}\n
      Email: ${email}\n
      Message:\n
      ${message}\n`,
      replyTo: email,  // Allows replying directly to sender
    };

    console.log("✉️ Mail options:", mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info);

    res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

export default router;
