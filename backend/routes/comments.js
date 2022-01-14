const express = require ("express")
const app = express()
const Comment = require("../models/Comment")
const User = require ("../models/User")

app.post('/', async (req, res) => {
    const { author, content , tweet } = req.body
    console.log("valeur de author =>",author);
    try {
      const comment = new Comment({ ...req.body })
      const commentInsered = await comment

      let user = await User.findById(author)

      user.comments.push(commentInsered._id)
      await user.save()
      await commentInsered.save()

      res.json(commentInsered)
    }catch (err) {
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
