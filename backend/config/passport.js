const passport = require("passport")
const passportLocal = require("passport-local")
let Users = require('../models/User')
const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy(async (name, password, done) => {

    const user = await Users.findOne({ name: name, password: password })
    .populate({ path: 'followers'})
    .populate({ path: 'following'})
    .populate({ path: 'tweets'})
    .populate({ path: 'retweets'})
    .populate({ path: 'comments'})
    .exec()

    if (!user) {
        return done(null, false)
    }
    return done(null, user) 
}))

passport.serializeUser((user, done) => {
    done(null, user._id)
})
passport.deserializeUser((id, done) => {
    const user = Users.findOne({ _id: id})
    done(null, user)
})

module.exports = passport