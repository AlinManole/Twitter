const express = require ("express")
const app = express()
const Comment = require("../models/Comment")
const Tweet = require("../models/Tweet")
const User = require ("../models/User")

app.post('/', async (req, res) => {
  const { user, tweet } = req.body

  try{
      const comment = await new Comment({...req.body})

      comment.save(async (err, comment) => {
          if (comment) {
              await User.updateOne(
                  { _id: user },
                  { $push: { comments: comment._id } }
              )
              
              await Tweet.updateOne(
                  { _id: tweet },
                  { $push: { comments: comment._id}}
              )
  
              res.json(comment)
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
  
app.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    await Comment.deleteOne({ _id: id }).exec()
    res.json({ success: 'Comment deleted' })
   
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

module.exports = app