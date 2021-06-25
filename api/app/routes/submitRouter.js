const express = require("express");
const router = express.Router();
const submitController = require("../controllers/submit.controller.js");

router.post("/", submitController.submit);

module.exports = router;
