const { transporter } = require("../Transporter/emailConfig.js");
require("dotenv").config();
async function sendEmail({ to, subject, message }) {
  try {
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to,
      subject,
      html: message,
      replyTo: process.env.REPLY_TO,
    };

    const info = await transporter.sendMail(mailOptions);

    return { success: true, info };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error };
  }
}

module.exports = { sendEmail };
