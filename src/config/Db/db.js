const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS);
    console.log(`
✨===========================================
🗄️  Database Connected Successfully
📌  Host: ${conn.connection.host}
===========================================✨
`);
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
