// import dependencies
const mongoose = require("./connection.js")

// create Bookmark model schema
const bookmarkSchema = new mongoose.Schema({
    title: String,
    url: String,
    username: String
})

// create Bookmark model
const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

// export Bookmark model
module.exports = Bookmark