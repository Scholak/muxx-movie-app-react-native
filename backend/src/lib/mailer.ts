import nodemailer from 'nodemailer'

export const mailer = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT as unknown as number,
	auth: {
		user: process.env.MAIL_AUTH_USER,
		pass: process.env.MAIL_AUTH_PASSWORD,
	},
})
