const express = require("express")
const morgan = require("morgan")
const app = express()
const port = 5000
const { dbConnect } = require("./config/db")

const userRoutes = require("./routes/users")
const tweetsRoutes = require("./routes/tweets")
const commentsRoutes = require("./routes/comments")

dbConnect()

app.use(morgan("tiny"))

app.use(express.json())

require('./models/Tweet')
require('./models/User')
require('./models/Comment')

app.use("/users", userRoutes)
app.use('/tweets', tweetsRoutes)
app.use('/comments', commentsRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

