import transporter from "../services/mailTransporter"


const sendEmail = async():Promise<any> => {
    try {
        const mailInfo= await transporter.sendMail({
        from: `<${process.env.NODEMAILER_USER}>`,
        to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
        subject:"Desafio aula 51",
        text:` o objeto foi: sendMail({
            from: {process.env.NODEMAILER_USER},
            to: g6e8k2i3m1o7e5d9@labenualunos.slack.com,
            subject:Desafio aula 51,
            text:`
    })

    console.log(mailInfo)
    } catch (error) {
       console.log(error) 
    }
    
}

sendEmail()

