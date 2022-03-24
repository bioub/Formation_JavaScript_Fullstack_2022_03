const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

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

app.use(cors()); // middleware (plugin) pour autoriser les requetes cross-origin
app.use(morgan('dev')); // middleware de log

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Home');
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  // res.sendFile
  // res.redirect
  // res.attachment
  // res.download
  // res.send(`<h2>Hello ${name}</h2>`); // appel .end
  res.json({
    msg: `Hello ${name}`
  })
});

// express.json() IMPORTANT (middleware body-parser) créé req.body à partir de la requete
app.post('/inscription', express.json(), (req, res) => {
  console.log(req.body);
  res.json({
    msg: 'DONE',
  });
});

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not found');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
