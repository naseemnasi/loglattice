const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PingPongRouter = require("./pingPongRouter");
const taskRouter = require("./taskRouter");
const submitRouter = require("./submitRouter.js");
const dashBoardRouter = require("./dashBoardRouter");
module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Log Lattice" });
  });

  app.use("/", PingPongRouter);
  app.use("/api/task", taskRouter);
  app.use("/api/submit", submitRouter);
  app.use("/api/dashboard", dashBoardRouter);

  app.use(express.static(path.join(__dirname, "../assets/files/")));
};
