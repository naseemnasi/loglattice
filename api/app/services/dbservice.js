const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("../../config/config.json");
var dbUrl = config.MongoUrl;

module.exports = () => {
  mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoose.connection.on("connected", () => {
    console.log(chalk.bold.green(`connected to mongoDB ${dbUrl}`));
  });

  mongoose.set("debug", true);

  mongoose.connection.on("error", (err) => {
    console.log(chalk.bold.red(`MongoDB has occured ${err}`));
  });

  mongoose.connection.on("disconnected", () => {});

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });
};
