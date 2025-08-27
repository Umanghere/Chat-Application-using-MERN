const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("This is server using node")
    }
    res.end();
})

server.listen(3000)