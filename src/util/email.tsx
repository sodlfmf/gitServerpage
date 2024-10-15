import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth : {
        user : process.env.NEXT_PUBLIC_EMAIL,
        pass : process.env.NEXT_PUBLIC_PASSWORD,
    }
})

export type ContactType={
    name : string;
    mail: string;
    inquiy : string;
}

type MAilOptionType = {
    to : string;
    mail : string;
    subject : string;
    html : string;
}

export function sendEmail({ name, mail, inquiy} : ContactType){
    const mailOption : MAilOptionType ={
        to : process.env.NEXT_PUBLIC_EMAIL || '',
        mail ,
        subject : 'YEOWOON 문의 메일',
        html : `
        <h3> 문의 내용 </h3>
        <div> ${inquiy}</div>
        </br>
        <p> 발신자 메일 : ${mail}</p>
        <p>발신인 : ${name}</p>`
    };
    return transporter.sendMail(mailOption);
}

