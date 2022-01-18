const express = require("express")
const app = express()
const port = 5000
const cors = require('cors')
const session = require("express-session")
const passport = require("./config/passport")
const mongoose = require("mongoose")
// les routes importer
const usersRoutes = require("./routes/users")
const tweetsRoutes = require("./routes/tweets")
const commentsRoutes = require("./routes/comments")
const authRoutes = require("./routes/auth")
const uploadRoutes = require("./routes/upProfilePicture")



require('./models/Tweet')
require('./models/User')
require('./models/Comment')

app.use(express.json())

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

app.use(express.json())
app.use(express.static("public"))
app.use('/users', usersRoutes)
app.use('/tweets', tweetsRoutes)
app.use('/comments', commentsRoutes)
app.use('/auth', authRoutes)
app.use('/upload', uploadRoutes)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})