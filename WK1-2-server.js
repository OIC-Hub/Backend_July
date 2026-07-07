const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
        if(req.url === "/home" && req.method === "GET"){
            
            res.end("hello world")
        }

        if(req.url === '/profile'  && req.method === "GET"){
            res.end("Ade")
        }
}) 

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})