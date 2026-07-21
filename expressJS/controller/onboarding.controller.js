const User = require("../model/user");

function Register(req, res){
    try {
        const {name, email, password, phone} = req.body;
        
        if(!name || !email || !password || !phone){
            res.status(403).send("fields required")
        }

        const newUser = new User({
            name: name,
            email: email,
            password: password,
            phone: phone
        })

        newUser.save();
        res.status(200).json({message: "User registered successfully"})

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error})
    }
}


module.exports = Register;