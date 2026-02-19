import Mailgen from "mailgen";
import nodemailer from "nodemailer";


// sending a email i have to do this things
const sendEmail = async (options) =>{
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanager.com/"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)

    const emailHtml = mailGenerator.generate(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendMail(mail)
    }catch(err){
        console.error("Error sending email:", err)
    }
}

const emailVerificationMailgenContent = (username,verficationUrl)=>{
    return {
        body: {
            name: username,
            intro : "Welcome to our service! We're excited to have you on board.",
            action:{
                instructions: "To get started, please verify your email address by clicking the button below:",
                button:{
                    color: "#1aae5a",
                    text: "Verify Email",
                    link: verficationUrl
                }
            },
            outro: "If you did not sign up for this account, please ignore this email."
        }
    }
}

const forgotPasswordMailgenContent = (username,passwordResetUrl)=>{
    return {
        body: {
            name: username,
            intro : "Welcome to our service! We're excited to have you on board.",
            action:{
                instructions: "To reset your password, please click the button below:",
                button:{
                    color: "#1aae5a",
                    text: "Reset Password",
                    link: passwordResetUrl
                }
            },
            outro: "If you did not request a password reset, please ignore this email."
        }
    }
}

export {emailVerificationMailgenContent,forgotPasswordMailgenContent,sendEmail}