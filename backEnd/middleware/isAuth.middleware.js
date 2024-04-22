const { verifyToken } = require("../helpers/token.helper");
const { getUserById } = require("../models/methods/User.methods");

exports.isAuth = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) return console.log("bearerToken not found");
  const token = bearerToken.split(" ")[1];
  //   console.log(token);
  if (!token) return console.log("token not found");
  const verify = verifyToken(token);
  //   console.log(verify);
  //   return;
  if (!verify) return console.log("error in verification");
  //   console.log(verify);
  //   const user = await getUserById(id);
  req.user = verify;
  next();
};
