import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [6, "Name too short"],
    maxLength: 20,
    required: true,
  },

  contactNo: {
    type: Number,
  },
  email: {
    type: String,
    minLength: [6, "Email too short"],
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model("User", UserSchema);
