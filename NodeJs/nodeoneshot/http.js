const http = require('http');

const server = http.createServer((req, res) => {
  // Handle incoming requests here
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
