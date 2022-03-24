const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const { cp } = require('fs');

mongoose.connect('mongodb://localhost:27017/test');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    // minlength: 3
  },
  completed: {
    type: Boolean,
    default: false,
   }
});
const Todo = mongoose.model('Todo', schema);

// Todo.create({title: 'ABC'}).then(() => {});
// Todo.find().then((todos) => {
//   todos[0].save()
// })
// const todo = new Todo({title: 'ABC'})
// todo.save().then(() => {

// })

const hostname = '127.0.0.1';
const port = 3000;

// const todos = [
//   {
//     id: 1,
//     title: 'ABC',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'DEF',
//     completed: true,
//   }
// ];

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


app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', express.json(), async (req, res) => {
  const todo = await Todo.create(req.body);

  res.statusCode = 201;
  res.json(todo);
});

app.get('/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.statusCode = 404;
    return res.json({msg: 'Todo not found'});
  }

  res.json(todo);
});

app.delete('/todos/:id', async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id)

  if (!todo) {
    res.statusCode = 404;
    return res.json({msg: 'Todo not found'});
  }

  res.json(todo);
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
