const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/", (req, res, next) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var message = req.body.message;
  var content = `firstName: ${firstName} \n lastName: ${lastName} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: email,
    to: "jpgerard87@gmail.com",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.error(err);
      res.send("An error occured");
    } else {
      res.send("Success");
    }
  });
});

app.listen(8000, () => console.log("Server is Running"));
