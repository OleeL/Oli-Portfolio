import { NextApiRequest, NextApiResponse } from 'next/types';
import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!req.body?.message || !req.body?.emailAddress) {
        res.status(400).json({
            error: 'Bad request',
        });
        return res;
    }
    const message = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS_TO,
        subject: 'Portfolio Contact Notification',
        text: req.body.message,
        html: `
            <p> ========= MESSAGE BELOW ========= <br>
                ${req.body.message} <br>
                =========  MESSAGE END  ========= <br>
            </p>
            <p>
                <br><br>
                Lots of love,
                <br> ${req.body.emailAddress}
            </p>
        `,
    };

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_TYPE,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    if (req.method === 'POST') {
        transporter.sendMail(message, err => {
            if (err) {
                return res.status(500).json({
                    error: 'Internal Server Error',
                });
            }
            return res.status(250).json({
                success: 'Message delivered',
            });
        });
        return res;
    }
    res.status(405).json({
        error: 'Bad Method',
    });
    return res;
}
