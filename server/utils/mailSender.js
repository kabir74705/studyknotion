const nodemailer = require("nodemailer");
const mailsender = async (email,title,body)=>{
    try {
    // For real purpose 
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // // For testing / development purpose
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   auth: {
    //     user: process.env.SMTP_EMAIL,
    //     pass: process.env.SMTP_PASSWORD,
    //   },
    // });

    // send mail
    const info = await transporter.sendMail({
      from: `kabir`,
      to: email,
      subject: title,
      html: body,
    });

    return info;
  }catch(error){
        console.log(error.message);

    }

}
module.exports = mailsender;
