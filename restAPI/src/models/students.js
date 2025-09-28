const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    minlength: 3
  },
  phone: {
    type: String,
    required: true,
    minlength: 3
  },
  address: {
    type: String,
    required: true,
    minlength: 3
  }
});

// new collection create
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
