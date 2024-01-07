const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, "name is required"],
        },

    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
      },
    password: {
        type: String,
        required: [true, "password is requied"],
      },
    website: {
        type: String,
        required: [true, "website is requied"],
      },
    address: {
        type: String,
        required: [true, "Address is required"],
      },
    phone: {
        type: String,
        required: [true, "phone numbe is required"],
      },

    },
    { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
