const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // Handle incoming requests here
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("This is the home page");
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end("Page not found");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
