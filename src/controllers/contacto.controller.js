const nodemailer = require("nodemailer");

const index = (req, res) => {
  res.render("contacto");
};

const submit = (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

  res.send("Enviando");
};

module.exports = {
  index,
  submit,
 };