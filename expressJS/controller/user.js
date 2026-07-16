const User = require("../model/data");

function getUser(req, res){
    res.status(200).json({message: "All User", User})
}

module.exports = getUser;