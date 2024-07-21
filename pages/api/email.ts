import { NextApiRequest, NextApiResponse } from 'next/types';
import nodemailer from 'nodemailer';

type ResponseBody = {
	error?: string;
	success?: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseBody>,
) {
	if (!req.body?.message || !req.body?.emailAddress) {
		return res.status(400).json({
			error: 'Bad request',
		});
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
                From:
                <br>
                <a href="mailto:${req.body.emailAddress}">${req.body.emailAddress}</a>
            </p>
        `,
	} as const;

	const transporter = nodemailer.createTransport({
		service: process.env.EMAIL_TYPE,
		auth: {
			user: process.env.EMAIL_ADDRESS,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	if (req.method !== 'POST') {
		return res.status(405).json({
			error: 'Bad Method',
		});
	}

	fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		body: `secret=${process.env.GOOGLE_RECAPTCHA_KEY}&response=${req.body.recaptchaToken}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
		},
	})
		.then(response => response.json())
		.then(data => {
			if (!data.success) {
				return res.status(401).json({
					error: 'Unauthorized',
				});
			}
			return transporter.sendMail(message, err => {
				if (err) {
					return res.status(500).json({
						error: 'Internal Server Error',
					});
				}
				return res.status(250).json({
					success: 'Message delivered',
				});
			});
		})
		.catch(() => {
			return res.status(500).json({
				error: 'Internal Server Error',
			});
		});
	return res;
}
