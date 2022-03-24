const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// app.use((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Home');
//   } else if (req.method === 'GET' && req.url === '/hello') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello');
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not found');
//   }
// });

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Home');
});

app.get('/hello', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello');
});

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not found');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
