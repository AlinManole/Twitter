const express = require("express")
const app = express()
const {sameNameEmail} = require('../middlewares/userSignup')

const User = require("../models/User")

const Tweet = require("../models/Tweet")
const Comment = require("../models/Comment")


app.post('/', sameNameEmail, async (req, res) => {
    try {
        const user = new User({
            ...req.body
        })
        user.save((err, user) => {
            if(user) {
                res.json(user)
                return
            }
            console.log(err)
            res.status(500).json({ error: err })
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
})

app.get('/', async (req, res) => {
    try {
        const users = await User.find()
        .populate({
            path: 'tweets',
            populate: {
                path: 'author',
                select: 'pseudo',
            },
            populate : {
                path : 'comments',
                select : 'content author',
            }   
        }
        )
        .exec()
        res.json(users)
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err})
    }
})

app.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
            .populate({
                path: 'followers', 
                select: 'pseudo followers following tweets retweets',
            })   
            .populate({
                path : 'following',
                select: 'pseudo followers following tweets retweets',
            })
            .populate({
                path: 'tweets',
                select: 'content author'
            })
            .populate({
                path: 'retweets',
                select: 'content author'
            })
            .exec()
        res.json(user)
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err})
    }
})

app.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findOneAndUpdate(
            {_id : id},
            {...req.body},
            {new: true}
        ).exec()

        res.json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err })
    }
})

app.delete('/:id', async (req, res) => {
    const {id} = req.params

    try {
        await User.deleteOne({_id: id}).exec()
        res.json({success : 'User deleted'})
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err})
    }
})

module.exports = app