const nbs = [3, 4];

// const trois = nbs[0];
// const quatre = nbs[1];

//    [3    , 4     ]
const [trois, quatre] = nbs;

const fullName = 'Romain Bohdanowicz';

// const tmp = fullName.split(' ');
// const firstName = tmp[0];
// const lastName = tmp[1];

//    ['Romain' , 'Bohd..']
const [firstName, lastName] = fullName.split(' ');


// combiné avec default
const [prenom, nom, deuxiemeNom = ''] = 'Jean Dupont Martin'.split(' ');

// combiné avec REST
//    ['Jean' , 'Dupont', 'Martin']
const [prenom1, ...names          ] = 'Jean Dupont Martin'.split(' ');
console.log(names); // ['Dupont', 'Martin']

// sur un objet
const coords = {
  x: 1,
  y: 2,
};


//    {x: 1      , y: 2      }
const {x: valeurX, y: valeurY} = coords;


// const {x: x, y: y} = coords;

// combiné avec shorthand property
const {x, y} = coords;

// combiné avec default + REST Object (ES2018)
const { z = 0, ...coords2d } = coords;
