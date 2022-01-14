const express = require("express")
const app = express()

const Tweet = require ("../models/Tweet")

app.post("/", (req, res) => {
 
    const tweet = new Tweet({
        ...req.body
      })
    
    tweet.save((err, tweet) => {
 
        if (err) {
          res.status(500).json({ error: err })
          return
        }

        res.json(tweet)
    })
})


app.get("/", async (req, res) => {
    try {
        const tweet = await Tweet.find().select("-createdAt -updatedAt -__v").exec()
        res.json(tweet)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})


app.delete("/:id",async (req, res) => {
    const { id } = req.params

    try {

        await Tweet.deleteOne({ _id: id }).exec()
        res.status(200).json({ success: "tweet deleted" })
    } catch(err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app