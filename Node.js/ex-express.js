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
