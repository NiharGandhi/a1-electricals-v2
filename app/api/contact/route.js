// /api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const body = await request.json();

    const pwd = process.env.EMAIL_PWD

        try {
            const { contactPerson, email, phone, city, country, inquiryFor, comments } = body;

            // Create a Nodemailer transporter
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'nihargandhi0000@gmail.com', // SMTP email
                    pass: pwd, // SMTP password
                    },
            });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Your Name" <your-email@example.com>', // sender address
            to: 'nihargandhi93@gmail.com', // list of receivers
            subject: 'New Inquiry', // Subject line
            html: `
                <p>Contact Person: ${contactPerson}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>City: ${city}</p>
                <p>Country: ${country}</p>
                <p>Inquiry For: ${inquiryFor}</p>
                <p>Comments: ${comments}</p>
            `,  // html body
        });

        // console.log('Message sent: %s', info.messageId);

        return NextResponse.json({ message: "Message sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error Sending Message" }, { status: 500 });
    }
}
