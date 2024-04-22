const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controllers");
const { upload } = require("../middleware/multer.middleware");
const { validator } = require("../middleware/express-validator.middleware");
const { xssMiddleware } = require("../middleware/xss.middleware");
const Routes = express.Router();

Routes.post(
  "/register",
  // upload.single("images"),
  // xssMiddleware,
  // validator,
  registerUser
);
Routes.post(
  "/login",
  // xssMiddleware,
  // validator,
  loginUser
);

module.exports = Routes;
