const bcrypt = require("bcrypt");
let Users_Account = require("../model/Account");

let Account_controller = {
  signin: async (req, res) => {
    let { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: false,
        message: "Required fields are missing!",
      });
      return;
    }

    try {
      const user = await Users_Account.findOne({ email });
      if (!user) {
        res.status(404).json({
          status: false,
          message: "User not found.",
        });
        return;
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({
          status: false,
          message: "Incorrect email or password",
        });
        return;
      }

      res.status(200).json({
        status: true,
        message: "Sucessfull Sign In!",
        token: Math.random(),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        message: "SignIn process fail",
      });
    }
  },
};

module.exports = Account_controller;
