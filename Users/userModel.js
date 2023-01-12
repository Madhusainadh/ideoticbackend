const mongoose = require("mongoose");


//creating schema for signup
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique:true},
    name: { type: String, required: true },
    password: { type: String, required: true},
   })

const User = mongoose.model("user", userSchema);
module.exports = User;