const asyncMiddleware = require("../middlewares/async");
const Task = require("../models/taskModel");
const config = require("../../config/config.json");

exports.addTask = asyncMiddleware(async (req, res) => {
  try {
    console.log("qqqqqqqq");
    console.log(req.body, "aa");
    const newTask = new Task();
    newTask.taskName = req.body.taskName;
    newTask.taskDescription = req.body.taskDescription;
    newTask.priority = req.body.priority;
    newTask.project = req.body.project;
    newTask.timeLeft = req.body.timeLeft;
    newTask.status = "todo";
    // newTask.employee = req.body.employee;
    newTask.save();
    config.success.message = "Task Added Successfully";
    config.success.data = newTask;
    return res.send(config.success);
  } catch (error) {
    // console.log(error)
    config.error.statusCode = 400;
    config.error.message = "Server error";
    config.error.data = error;

    return res.send(config.error);
  }
});
exports.editTask = asyncMiddleware(async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.body.taskId,
      {
        taskName: req.body.taskName,
        taskDescription: req.body.taskDescription,
        priority: req.body.priority,
        status: req.body.status,
        // 'updated_date': new Date().valueOf()
      },
      { new: true }
    );

    if (!task) {
      config.error.message = `Task not found with id ${req.body.taskId}`;
      config.error.data = null;
      return res.send(config.error);
    }
    config.success.message = "Task details updated";
    config.success.data = task;

    return res.send(config.success);
  } catch (error) {
    // console.log(error)
    config.error.statusCode = 400;
    config.error.message = "Server error";
    config.error.data = error;

    return res.send(config.error);
  }
});

exports.taskStatusChange = asyncMiddleware(async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.body.id,
      {
        status: req.body.status,
        timeLeft: req.body.timeLeft,
        updatedAt: new Date().valueOf(),
        // 'updated_date': new Date().valueOf()
      },
      { new: true }
    );

    if (!task) {
      config.error.message = `Task not found with id ${req.body.taskId}`;
      config.error.data = null;
      return res.send(config.error);
    }
    config.success.message = "Task details updated";
    config.success.data = task;

    return res.send(config.success);
  } catch (error) {
    // console.log(error)
    config.error.statusCode = 400;
    config.error.message = "Server error";
    config.error.data = error;

    return res.send(config.error);
  }
});
exports.taskView = asyncMiddleware(async (req, res) => {
  try {
    const task = await Task.find();
    if (!task) {
      config.error.message = `Task not found`;
      config.error.data = null;
      return res.send(config.error);
    }
    config.success.message = "Tasks are";
    config.success.data = task;

    return res.send(config.success);
  } catch (error) {
    console.log(error);
    config.error.statusCode = 400;
    config.error.message = "Server error";
    config.error.data = error;

    return res.send(config.error);
  }
});
exports.taskFeed = asyncMiddleware(async (req, res) => {
  try {
    const task = await Task.find().sort({ createdAt: -1 });
    if (!task) {
      config.error.message = `Task not found`;
      config.error.data = null;
      return res.send(config.error);
    }
    config.success.message = "Task Added Successfully";
    config.success.data = task;
    return res.send(config.success);
  } catch (error) {
    config.error.statusCode = 400;
    config.error.message = "Server error";
    config.error.data = error;

    return res.send(config.error);
  }
});
