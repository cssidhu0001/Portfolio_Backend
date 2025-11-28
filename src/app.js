const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use("/api/contact", require("./Routes/contactRoutes"));
app.use("/api/project", require("./Routes/projectRoutes"));
app.use("/api/email", require("./Routes/emailRoutes"));

app.get("/", (req, res) => {
  res.send(`
🔰  SERVER ONLINE!
📍  PORT      : ${process.env.PORT}
📍  TIMESTAMP : ${new Date().toLocaleTimeString()}
📍  MODE      : DEVELOPEMENT READY ⚡


`);
});
module.exports = app;
