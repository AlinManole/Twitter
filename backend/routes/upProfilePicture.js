const express = require("express")
const app = express()
const fs = require("fs")
const multer = require("multer")
const moment = require("moment")

const User = require ("../models/User")

const upload = multer({ dest: 'public' })
const {verifyUser} = require('../middlewares/verifyUser')


app.post( 
    '/:id/file',verifyUser, 
    upload.single('photo'), 
    async (req, res) => 
    {
        const { id } = req.params 
        try {  
            const user = await User.findById(id).exec() 
    
            const time = moment().format("DD-MM-YYYY-hh-mm-ss")      
            const photoName = `${user.name}-${time}.jpg` 
            fs.renameSync(req.file.path, `public/${photoName}`) 
        
            user.profilePicture  = `http://localhost:5000/${photoName}` 
            await user.save()

            res.json({
                profilePicture:user.profilePicture   
            })
        }catch (err) {
            console.log(err)
            res.status(500).json({ error: err })
        }
})

module.exports = app  