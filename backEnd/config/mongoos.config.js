const mongoose = require("mongoose");
const { cfMongoose } = require("./all.config");

mongoose
  .connect(cfMongoose.mongoose_link_db)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error connecting to database");
  });

module.exports = { mongoose };
