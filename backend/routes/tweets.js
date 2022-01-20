const express = require("express")
const app = express()
const Tweet = require ("../models/Tweet")
const User = require("../models/User");


app.post("/", async (req, res) => {
    const { id } = req.params;

    try {

        const tweet = await new Tweet({
            ...req.body,
            user: id
        });

        tweet.save(async (err, tweet) => {
            if (tweet) {
                const getCurrentUser = await User.findOne({ id: id }).exec()
                getCurrentUser.tweets.push(tweet.id);
                getCurrentUser.save();

                res.json(tweet);
                return;
            }
            console.log("tweet", tweet);
            console.log(err);
            res.status(500).json({ error: err });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});

app.get("/", async (req, res) => {
    
    try {
        const tweet = await Tweet.find()
        .populate({
            path : 'comments',
            select: 'content author createdAt updatedAt'
        })
        .populate({
            path: 'author',
            select: 'name pseudo'
            
        })
        .exec()
        res.json(tweet)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.delete("/:id" ,async (req, res) => {
    const { id } = req.params

    try {
        await Tweet.deleteOne({ _id: id }).exec()
        res.status(200).json({ success: "tweet deleted" })
    } catch(err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app