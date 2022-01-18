const express = require("express")
const app = express()
const port = 5000
const cors = require('cors')
const session = require("express-session")
const passport = require("./config/passport")
const mongoose = require("mongoose")

app.use(express.json())
app.use(express.static('public'))

//routes
const usersRoutes = require("./routes/users")
const tweetsRoutes = require("./routes/tweets")
const commentsRoutes = require("./routes/comments")
const authRoutes = require("./routes/auth")
const uploadRoutes = require("./routes/upProfilePicture.js")
const followRoutes = require('./routes/follow')

//Mongo Start
const dbName = 'TwitterDB'
  const dbUrl = 'mongodb+srv://admin:admin@twitterclone.nzeai.mongodb.net/TwitterDB'

  mongoose.connect(dbUrl)
const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})

db.once('open', () => {
  console.log(`Connection to ${dbName} established`)
})
// Mongo Finished



app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: false
}))

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/', authRoutes)
app.use('/users', usersRoutes)
app.use('/tweets', tweetsRoutes)
app.use('/upload', uploadRoutes)
app.use('/comments', commentsRoutes)
app.use('/follow', followRoutes)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})