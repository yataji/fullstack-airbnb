const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // images: {
    //   type: String,
    //   required: false,
    // },
    firstname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
      required: false,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
