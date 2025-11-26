const sendMail = require("../services/mailservice");

exports.registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    await sendMail(
      email,
      "Welcome!",
      `<h2>Hello ${name},</h2><p>Your registration is successful.</p>`
    );

    res.json({ message: "User registered & email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
