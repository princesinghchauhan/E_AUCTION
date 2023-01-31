// "use strict";
// const nodemailer = require("nodemailer");

// const main = async  ()=> {

//   let transporter = nodemailer.createTransport({

//     service:"gmail",
//     auth: {
//       user: "princesinghchauhan91@gmail.com", 
//       pass: "psriinngche@2031",
//     },
//   });


//   let info = await transporter.sendMail({
//     from: 'princesinghchauhan91@gmail.com', // sender address
//     to: "shobhak1411@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

// module.exports= {main}