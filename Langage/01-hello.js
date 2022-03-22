'use strict';

const prenoms = ['Romain', 'Jean', 'Eric'];

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
