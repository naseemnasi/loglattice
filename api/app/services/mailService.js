const mailgun = require("mailgun-js");
const config = require("../../config/sendmailconfig.json");
const DOMAIN = config.DOMAIN;
const API_KEY = config.API_KEY;
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

async function sendMail(text) {
  try {
    let html = `<body>
    <h1>  ${text[0]["name"]} </h1>
    <table cellpadding="0" cellspacing="0" width="640" align="left" border="1">
    <tr> 
          <th> Task </th>
          <th> Project </th>
          <th> Status </th>
    </tr>`;

    text.forEach((element) => {
      html = html.concat(`
        <tr> <td>${element.taskName}</td>
        <td>${element.project}</td>
        <td>${element.status}</td>
    </tr>`);
    });
    html = html.concat(`</table> </body>`);

    const data = {
      from: config.FROM,
      to: "naseem@codelattice.com", // najla@codelattice.com",
      subject: "LOGLATTICE",
      html: html,
    };
    mg.messages().send(data, function (error, body) {
      if (error) {
        console.log(body);
        return body;
      } else {
        return body;
      }
    });
  } catch (err) {
    return err;
  }
}

module.exports = { sendMail };
