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


async function getUsers(req, res) {
    try{
        const allUser = await User.find();
        res.status(200).json({message: "all user fetched successfully", allUser})
    }catch(error){
               res.status(500).json({message: "Internal Server Error", error})
    }
}

async function updateUser(req, res){
    try{
            const {id} = req.params;
            const {name, phone} = req.body;

            if (!id){
                res.status(400).send("User Id is required")
            }

            const updateuser = await User.findByIdAndUpdate(id, {name, phone}, { new: true });

            if(!updateuser){
                res.status(404).send("User NoT FounD")
            }

            res.status(200).json({message: "User updated succesfully", updateuser})

    }catch(error){
               res.status(500).json({message: "Internal Server Error", error})
        
    }
}


module.exports = {Register, getUsers, updateUser};