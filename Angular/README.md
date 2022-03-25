# Exercice

Créer un composant Todos dans le module Todos

Ajouter une route dans TodosRoutingModule, importer TodosModule dans AppModule

Et créer un lien dans app.component.html

Dans ce composant ajouter un formulaire avec un bouton + et un champs de saisi :

```
<form>
  <input type="text">
  <button>+</button>
</form>
```

Dans le fichier .ts créer une propriété todos qui contiendra :

```
this.todos = [
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
```

Afficher chaque todo dans le composant todos sous la forme :

```
  <div class="todo">
    <input type="checkbox" checked>
    <span>DEF</span>
    <button>-</button>
  </div>
```

Au submit du formulaire ajouter une todo au tableau (la liste doit se raffraichir)

Au clic du bouton -, supprimer la todo du tableau (la liste doit se raffraichir)
