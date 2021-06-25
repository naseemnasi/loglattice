var express = require("express");
const chalk = require("chalk");
const app = express();
(mongoose = require("mongoose")),
  (passport = require("passport")),
  (bodyParser = require("body-parser")),
  (LocalStrategy = require("passport-local")),
  (passportLocalMongoose = require("passport-local-mongoose")),
  require("dotenv").config();

const config = require("./config/config.json");

require("./app/routes/apis")(app);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  require("express-session")({
    secret: "Codelattice",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./app/services/dbservice")();
app.use(express.json());
app.set("port", process.env.APP_PORT || config.appPort);
app.listen(app.get("port"), function () {
  console.log(
    chalk.green("LogLattice is listening on port "),
    chalk.red.bold(app.get("port"))
  );
});
