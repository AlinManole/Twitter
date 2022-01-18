const express = require("express")
const app = express()

const passport = require('../config/passport')

// route qui permet de ce login 
app.post("/login", passport.authenticate("local"), (req, res) => {

    if (req.user) {

        req.logIn(req.user, err =>{
            if(err) {
                console.log(err);
            } else {

                res.json(req.user)
            }
        })
    }
})

app.get("/", async (req, res) => {
    const {user} =  req
    const users = await user.find()

    if (user) {
        res.json(users)
    } else {
        res.status(401).json({ error: "Unauthorized"})
    }
})
module.exports = app