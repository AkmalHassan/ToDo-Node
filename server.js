const http = require('http');

const server = http.createServer((req, res) => {
    res.sendFile("/index.html");
});

server.listen(3000);