const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nanoid = require("nanoid");

const User = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  age: { type: String },
  id: { type: String, default: () => nanoid.nanoid() },
  coordinate: { type: String, max: 7 },
});

//middleware

module.exports = mongoose.model("User", User);
