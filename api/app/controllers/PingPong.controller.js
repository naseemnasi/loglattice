exports.ping = (req, res) => {
  res.send({
    code: "200",
    message: "Pong",
    status: "success",
  });
};

exports.pong = (req, res) => {
  res.send({
    code: "200",
    message: "Pong",
    status: "success",
  });
};
