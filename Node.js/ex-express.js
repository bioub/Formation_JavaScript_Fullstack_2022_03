const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3000;

const todos = [
  {
    id: 1,
    title: 'ABC',
    completed: false,
  },
  {
    id: 2,
    title: 'DEF',
    completed: true,
  }
];

/*
Créer un serveur express avec 4 routes
- GET /todos
renvoie en JSON le tableau complet
- GET /todos/:id
renvoie en JSON la todo demandée
- POST /todos
ajoute la todo reçue (ex: {"title": "XYZ", "completed": false}) au tableau
génère un id dans la todo
renvoie en JSON la todo créé avec son id (status code 201)
- DELETE /todos/:id
supprime et renvoie la todo supprimée en JSON
*/


const app = express();

app.use(cors());
app.use(morgan('dev'));


app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', express.json(), (req, res) => {
  const lastTodo = todos.at(-1);

  const nextId = lastTodo ? lastTodo.id + 1 : 1;

  const todo = req.body;
  todo.id = nextId;

  todos.push(todo);

  res.statusCode = 201;
  res.json(todo);
});

app.get('/todos/:id', (req, res) => {
  const id = +req.params.id; // + converti en Number

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    res.statusCode = 404;
    return res.json({msg: 'Todo not found'});
  }

  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = +req.params.id; // + converti en Number

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    res.statusCode = 404;
    return res.json({msg: 'Todo not found'});
  }

  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  res.json(todo);
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
