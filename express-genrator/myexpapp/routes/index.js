var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/contactprocess', function(req, res, next) {
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = parseInt(a) + parseInt(b);
  res.render('ans', { mya:a, myb:b, myc:c });
});

router.get('/demomail', function(req, res, next) {

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "abc@gmail.com",
      pass: "gwra dhwo wkru xtgi",
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Siddhit" <maddison53@ethereal.email>', // sender address
      to: "abc@gmail.com, baz@example.com", // list of receivers
      subject: "Hello ", // Subject line
      text: "Hello siddhit?", // plain text body
      html: "<b>Hello Siddhit?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);
  res.send('Mail send');
  res.render('demomail', { title: 'Express' });
});


module.exports = router;

