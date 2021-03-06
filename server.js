const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

const PORT = process.env.PORT || 8080;

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: ".env.test" });
}   else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({ path: ".env.development" });
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    })

    let mailOptions = {
      from: "Website message",
      to: ['RyanCRickert@gmail.com'],
      replyTo: req.body.email,
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
    })
  })
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});