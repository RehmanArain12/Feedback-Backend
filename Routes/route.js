const express = require("express");
const route = express.Router();
const controllers = require("../Controllers/Controllers");
const Account_controller = require("../Controllers/UserAccount");
// LogIn API
route.post("/signin", Account_controller.signin);
route.get("/checks", controllers.check);
route.post("/sendfeedback", controllers.sendfeedback);
route.get("/getfeedback/:student_id/:name", controllers.getfeedback);
route.get("/getfeedbackadmin", controllers.getapi);

module.exports = route;
