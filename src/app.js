const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/contact", require("./Routes/contactRoutes"));
app.use("/api/project", require("./Routes/projectRoutes"));

app.get("/", (req, res) => {
  res.send(`
🔰  SERVER ONLINE!
📍  PORT      : ${process.env.PORT}
📍  TIMESTAMP : ${new Date().toLocaleTimeString()}
📍  MODE      : DEVELOPEMENT READY ⚡


`);
});
module.exports = app;
