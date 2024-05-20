const mongoose = require("mongoose");
const validator = require("validator");

const teamsSchema = new mongoose.Schema({
  // id, first_name, last_name, phone, email, role(admin, user)

  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    minlength: [2, "First name must be at least 2 characters long"],
    maxlength: [100, "First name must be less than 100 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    minlength: [2, "Last name must be at least 2 characters long"],
    maxlength: [100, "Last name must be less than 100 characters long"],
  },
  phone: {
    type: String,
    validate: {
      validator: function (num) {
        return validator.isMobilePhone(num, "any", { strictMode: true });
      },
      message: () => `This is not a valid phone number!`,
    },
    required: [true, "Phone number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (mail) {
        return validator.isEmail(mail);
      },
      message: () => `This is not a valid email!`,
    },
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["admin", "user"],
    default: "user",
  },
});

const Teams = mongoose.model("Teams", teamsSchema, "teams");
module.exports = Teams;
