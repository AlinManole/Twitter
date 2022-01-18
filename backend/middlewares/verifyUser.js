const verifyUser = (req, res, next) => {
    console.log(req.user,"User needed");
    if (!req.user) {
        res.status(404).json({error: "Unauthorized"})
    } else {
        next()
    }
}

module.exports = {
    verifyUser
}