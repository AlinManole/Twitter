const mongoose = require("mongoose")

const dbConnect = () => {
  const dbName = 'TwitterDB'
  const dbUrl = 'mongodb+srv://admin:admin@twitterclone.nzeai.mongodb.net/TwitterDB'

  try {
    mongoose.connect(dbUrl)
    console.log(`Connected to ${dbName} database`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  dbConnect
}