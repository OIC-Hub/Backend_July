const express = require("express");
const dotenv = require("dotenv")
dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT

const users = [
    { id: 1, name: 'Ada Lovelace' },
    { id: 2, name: 'Alan Turing' },
    { id: 3, name: 'Grace Hopper' },
];

app.get("/users", (req, res) => {
    res.status(200).json({ message: "Data fetched Successfully", users })
})


app.get("/user/:id", (req, res) => {
    try {
        const { id } = req.params;

        if(isNaN(id) || id > 3 || id < 1){
            res.status(404).send("User Not Found");
        }

        const findUser = users.find(u => u.id === Number(id));
        res.status(200).json( findUser )
    } catch (error) {
        console.error(error)
    }
})


app.post("/register", (req, res) => {
    const {id, name} = req.body;

    if(!name){
        res.status(401).send("Name is required")
    }

    const newUser = ({
        id: users.length + 1,
        name: name
    })

    users.push(newUser)
    res.status(201).json({message: "User created successfully", users})
})

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})