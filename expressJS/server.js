const express = require("express");
const dotenv = require("dotenv")
dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT

app.get('/home', (req, res) => {
    res.send("hello")

})

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})