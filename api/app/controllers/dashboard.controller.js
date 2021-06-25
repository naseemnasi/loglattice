const asyncMiddleware = require("../middlewares/async");
const config = require("../../config/config.json");
const TaskModel = require("../models/taskModel");
exports.doNutChart = asyncMiddleware(async (req, res) => {
  try {
    let allTasks = await TaskModel.find({});
    let toDo = 0;
    let inProgress = 0;
    let done = 0;
    allTasks.forEach((element) => {
      if (element.status == "todo") {
        toDo += 1;
      } else if (element.status == "inprogress") {
        inProgress += 1;
      } else {
        done += 1;
      }
    });

    config.success.data = [toDo, inProgress, done];
    config.success.message = "";
    res.send(config.success);
  } catch (e) {
    config.error.statusCode = 400;
    config.error.message = "Server error";
    config.error.data = error;

    return res.send(config.error);
  }
});
exports.doneByDate = asyncMiddleware(async (req, res) => {
  try {
    let dates = [];
    let dones = [];
    let taskData = await TaskModel.find({});
    taskData.forEach((element) => {
      if (element.status == "done") {
        let newDate =
          element.updatedAt.getFullYear() +
          "-" +
          (element.updatedAt.getMonth() + 1) +
          "-" +
          element.updatedAt.getDate();
        let index = dates.findIndex((val) => val == newDate);
        if (index < 0) {
          dates.push(newDate);
          dones.push(1);
        } else {
          index1 = dates.indexOf(newDate);
          dones[index1] += 1;
        }
      }
    });
    config.success.data = { dones: dones, dates: dates };
    config.success.message = "";
    res.send(config.success);
  } catch (e) {
    config.error.statusCode = 400;
    config.error.message = "Server error";
    config.error.data = error;
    return res.send(config.error);
  }
});
