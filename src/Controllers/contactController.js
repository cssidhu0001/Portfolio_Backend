const Contact = require("../Models/Contact");
const axios = require("axios");
// const { sendEmail } = require("../utils/sendEmail");
const contactEmailTemplate = require("../Functions/contactMeTemplate");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to DB
    const newMessage = await Contact.create({
      name,
      email,
      subject,
      message,
    });
    await axios.post("http://localhost:3000/api/email/send", {
      to: email,
      subject: `🙏 Thank You, ${name} for Reaching me Out!!`,
      message: contactEmailTemplate({ name, email, subject, message }),
    });

    res.status(201).json({
      success: true,
      message: `✨ Thank You ${name}, for reaching me!! ✨`,
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
