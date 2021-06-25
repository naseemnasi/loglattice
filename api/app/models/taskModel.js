const mongoose = require("mongoose");
const { Schema } = mongoose;

var taskSchema = new Schema({
  taskName: String,
  taskDescription: String,
  // 'project': {
  //     'type': Schema.Types.ObjectId,
  //     'ref': 'Project'
  // },
  project: String,
  timeLeft: Number,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  priority: String,
  // 'employee': String
});

module.exports = mongoose.model("Task", taskSchema);
