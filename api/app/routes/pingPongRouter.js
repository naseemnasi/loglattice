const express = require("express");
const router = express.Router();
const PingPong = require("../controllers/PingPong.controller");

router.get("/ping", PingPong.pong);
router.get("/pong", PingPong.ping);

module.exports = router;
