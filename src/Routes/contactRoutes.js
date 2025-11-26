const express = require("express");
const router = express.Router();
const { sendMessage } = require("../Controllers/contactController");
router.post("/reachme", sendMessage);
module.exports = router;
