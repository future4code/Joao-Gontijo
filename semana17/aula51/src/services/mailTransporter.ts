import nodemailer from 'nodemailer';
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: false,
    auth: {
        user:process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: {ciphers: "SSLv3"}
})

export default transporter