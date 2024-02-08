const mongoose = require("mongoose");
let Feedback = mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    
  },
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  complete_course: {
    type: String,
    required: true,
  },
  teacher_regular: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
});
let User = mongoose.model("Accounts", Feedback);
module.exports = User;
