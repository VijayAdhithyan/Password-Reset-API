import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import dotenv from "dotenv";

const sendEmail = async (email, subject, payload) => {
  dotenv.config();
  const { name, link } = payload;
  console.log(name);
  let config = {
    service: "gmail",
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  let transporter = nodemailer.createTransport(config);
  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: name,
      intro:
        "You have received this email because a password reset request for your account was received.",
      action: {
        instructions: "Click the button below to reset your password:",
        button: {
          color: "#DC4D2F",
          text: "Reset your password",
          link: `http://localhost:5173${link}`,
        },
      },
      outro:
        "If you did not request a password reset, no further action is required on your part.",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: process.env.FROM_EMAIL,
    to: email,
    subject: subject,
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "you should receive an email",
      });
    })
    .catch((error) => {
      return error;
    });
};

export default sendEmail;
