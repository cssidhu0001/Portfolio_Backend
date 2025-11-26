require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/Db/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`
🚀==========================================
🟢  Server Running
🔗  http://localhost:${PORT}
📍  TIMESTAMP : ${new Date().toLocaleTimeString()}
📍  MODE      : DEVELOPEMENT READY ⚡
==========================================🚀
`);
});
