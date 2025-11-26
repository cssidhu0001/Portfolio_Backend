const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },

    // 👇 Custom date & time fields
    date: {
      type: String,
      default: () => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // YYYY-MM-DD
      },
    },
    time: {
      type: String,
      default: () => {
        const now = new Date();
        return now.toTimeString().split(" ")[0]; // HH:MM:SS
      },
    },
  },
  {
    timestamps: false, // ❌ No automatic createdAt/updatedAt
  }
);

module.exports = mongoose.model("ReachMe", contactSchema, "ReachMe");
