const slackboatService = require("../services/slackboatService");
const mailService = require("../services/mailService");

exports.submit = (req, res) => {
  try {
    let text = req.body;
    mailService.sendMail(text).catch((err) => {
      throw err;
    });
    slackboatService.logAtChannel(text).catch((err) => {
      throw err;
    });
    res.send({
      code: "200",
      message: "success",
      status: "success",
    });
  } catch (err) {
    res.send({
      code: "400",
      message: err,
      status: "Error",
    });
  }
};
