const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
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
    
    phone: {
        type: String,
        required: [true, "phone numbe is required"],
      },

    },
    { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);
