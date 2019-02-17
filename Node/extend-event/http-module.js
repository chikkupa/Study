const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.write('Hello World');
        res.end();
    }

    if(req.url == "/api/details/"){
        responseVal = {
            name : "Chikku P A",
            age : 29,
            location : "Kaniyapuram"
        };

        res.write(JSON.stringify(responseVal));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000')