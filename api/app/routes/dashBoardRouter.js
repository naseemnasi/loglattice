const express = require("express");
const router = express.Router();
const dashBoardController = require("../controllers/dashboard.controller");

router.get("/donut", dashBoardController.doNutChart);
router.get("/donebydate", dashBoardController.doneByDate);
module.exports = router;
