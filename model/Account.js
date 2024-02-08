let mongoose = require("mongoose");
let user_schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now()
  },
});
let Users_Account = mongoose.model("Users", user_schema);
module.exports = Users_Account;
