const mailgun = require("mailgun-js");
const DOMAIN = "sandbox155916c9e7c9423a8ac921a27ad16173.mailgun.org";
const mg = mailgun({
  apiKey: "f8065852ff9ef1eadea26cbf51738f30-90ac0eb7-734113d1",
  domain: DOMAIN,
});

exports.send = (req, res) => {
  const data = {
    from: "loglattice@gmail.com",
    to: "naseem@codelattice.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
};
