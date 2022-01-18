
let Users = require("../models/User")

const sameNameEmail = async (req, res, next) => {
    const { name, email } = await req.body
    console.log(req.body);

    const checkNameAndEmail = await Users.findOne({email: email})
    console.log("log middleware",checkNameAndEmail);
    if (checkNameAndEmail) {
        res.status(401).json("email in use")
    } else {
        next()
    }
}
module.exports = {
    sameNameEmail
}