const express = require("express");
const { sendEmail } = require("../Utils/sendEmail.js");

const router = express.Router();

router.post("/send", async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "to, subject, and message are required fields.",
    });
  }

  const result = await sendEmail({ to, subject, message });

  if (result.success) {
    return res.json({ success: true, message: "Email sent successfully!" });
  } else {
    return res.status(500).json({ success: false, error: result.error });
  }
});

module.exports = router;
