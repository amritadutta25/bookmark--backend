// import dependencies
require('dotenv').config()
const mongoose = require('mongoose')

// get DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL

// connect to mongoose
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => {console.log("Connected to Mongoose")})
.on("close", () => {console.log("Disconnected from Mongoose")})
.on("error", (error) => {console.log(error)})

// export mongoose connection
module.exports = mongoose