const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+\@.+\..+/, "Invalid email format"],
    },
    phone: {
      type: String,
      required: true,
    },

    projectType: {
      type: String,
      required: true,
      //   enum: [
      //     "Website",
      //     "Mobile App",
      //     "UI/UX Design",
      //     "Software Development",
      //     "E-commerce",
      //     "Other"
      //   ],
    },

    projectTitle: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      default: "Not Provided",
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    // Custom date & time
    date: {
      type: String,
      default: () => new Date().toISOString().split("T")[0],
    },
    time: {
      type: String,
      default: () => new Date().toTimeString().split(" ")[0],
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model(
  "ProjectRequest",
  projectSchema,
  "ProjectRequest"
);
