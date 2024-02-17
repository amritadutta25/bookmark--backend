// import dependencies
const mongoose = require("./connection.js")

// create User model schema
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

// create User model
const User = mongoose.model("User", userSchema)

// export User model
module.exports = User