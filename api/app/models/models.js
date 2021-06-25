const mongoose = require("mongoose");
const { Schema } = mongoose;

var usercountSchema = new Schema({
  userName: Number,
  password: String,
});

module.exports = mongoose.model("User", usercountSchema);
