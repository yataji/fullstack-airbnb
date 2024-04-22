const emailjs = require("@emailjs/nodejs");
const { cfEmailjs } = require("../config/all.config");

exports.mailJs = (username, email) => {
  //   const { username, email } = req.body;
  const templateParams = {
    to_email: email,
    to_name: username,
    from_name: "jololo",
    reply_to: email,
    message: "yataji verification",
  };
  emailjs.init({
    publicKey: cfEmailjs.public_key,
  });

  emailjs
    .send(cfEmailjs.service_id, cfEmailjs.template_id, templateParams)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
