const express = require("express");
const router = express.Router();

const { createProjectRequest } = require("../Controllers/projectController");

router.post("/hireme", createProjectRequest);

module.exports = router;
