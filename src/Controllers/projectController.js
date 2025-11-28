const HireMeEmailTemplate = require("../Functions/HireMeEmailTemplate");
const ProjectRequest = require("../Models/ProjectRequest");
const axios = require("axios");
exports.createProjectRequest = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      projectType,
      projectTitle,
      budget,
      description,
      location,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !projectType ||
      !projectTitle ||
      !description ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const request = await ProjectRequest.create({
      fullName,
      email,
      phone,
      projectType,
      projectTitle,
      budget,
      description,
      location,
    });
    await axios.post("http://localhost:3000/api/email/send", {
      to: email,
      subject: `🙏 Thank You, ${fullName}| Your project inquiry has been received successfully`,
      message: HireMeEmailTemplate({
        fullName,
        email,
        projectType,
        projectTitle,
        budget,
        description,
        location,
      }),
    });

    return res.status(201).json({
      success: true,
      message: `🙏 Thank You, ${fullName}| Your project inquiry has been received successfully`,
      data: request,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
