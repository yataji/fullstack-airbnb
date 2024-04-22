const { bcryptFunction } = require("../helpers/bcrypt.helper");
const { mailJs } = require("../helpers/emailjs.helper");
const { createToken } = require("../helpers/token.helper");
const usersSchema = require("../models/schema/users.schema");
const bcrypt = require("bcrypt");

// const User = require("../models/schema/users.schema");

exports.registerUser = async (req, res) => {
  try {
    const { dataFirstName, dataLastName, dataEmail, dataPassword } = req.body;
    console.log(dataFirstName, dataLastName, dataEmail, dataPassword);
    const newUser = new usersSchema({
      //     ...req.body,
      firstname: dataFirstName,
      lastname: dataLastName,
      email: dataEmail,
      password: await bcryptFunction.hashing(dataPassword),
      //     images: req.file.filename,
    });
    const result = await newUser.save();
    //   await mailJs(username, email);
    res.status(201).json(result);
  } catch (err) {
    console.log("Error", err);
    return;
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { getEmail, getPassword } = req.body;
    // console.log(getEmail, getPassword);
    // return;
    const user = await usersSchema.findOne({ email: getEmail });
    // console.log("user ----------------", user);
    if (!user) res.status(400).send("email not registred");
    try {
      if (await bcryptFunction.compareHashingPass(getPassword, user.password)) {
        // console.log("hna");
        const token = createToken(user._id);
        if (!token) return res.status(404).send("token not generated ");
        res.status(201).json({ token: token });
      }
    } catch (err) {
      console.log("Error", err);
      res.status(400).send("password not correct");
    }
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
