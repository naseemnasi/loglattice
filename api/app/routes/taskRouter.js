const express = require("express");
const taskRouter = express.Router();
const Task = require("../controllers/task.controller");

taskRouter.post("/newTask", Task.addTask);
taskRouter.put("/editTask", Task.editTask);
taskRouter.put("/statusChange", Task.taskStatusChange);
taskRouter.get("/taskView", Task.taskView);
taskRouter.get("/taskFeed", Task.taskFeed);
module.exports = taskRouter;
