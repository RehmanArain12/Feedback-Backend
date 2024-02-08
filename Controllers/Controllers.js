let User = require("../model/Schema");

let controllers = {
  check: (req, res) => {
    res.json({
      status: true,
      message: "Server is running",
    });
  },

  sendfeedback: (req, res) => {
    let {
      student_id,
      name,
      course,
      complete_course,
      teacher_regular,
      feedback,
    } = req.body;
    if (
      !student_id ||
      !name ||
      !complete_course ||
      !course ||
      !teacher_regular ||
      !feedback
    ) {
      res.status(400).json({ message: "Please enter all fields" });
      return;
    }
    let newFeedback = {
      student_id,
      name,
      course,
      complete_course,
      teacher_regular,
      feedback,
    };
    User.create(newFeedback)
      .then((respone) => {
        res.status(201).json({
          status: true,
          message: "Thanks for feedback",
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: false,
          message: "User already Exist",
        });
      });
  },
  getfeedback: (req, res) => {
    let { student_id, name } = req.params;
    if (!student_id && !name) {
      res.status(404).json({
        status: false,
        message: "Please provide the user id or username",
      });
      return;
    }
    let query = {};
    if (student_id) query.student_id = student_id;
    if (name) query.name = name;

    User.find(query)
      .then((response) => {
        if (response.length > 0) {
          res.status(200).json({
            status: true,
            message: "Feedbacks retrieved successfully",
            data: response,
          });
        } else {
          res.status(404).json({
            status: false,
            message: "No feedbacks found for the provided criteria",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          status: false,
          message: "Internal Server Error",
        });
      });
  },

  getapi: (req, res) => {
    User.find()
      .then((response) => {
        res.status(200).json({
          status: true,
          message: "Task List",
          data: response,
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: false,
          message: "Task Not List",
        });
      });
  },
};
module.exports = controllers;
