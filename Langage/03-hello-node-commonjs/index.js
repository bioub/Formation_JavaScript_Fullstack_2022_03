'use strict';

const { hello } = require('./hello.js');

const prenoms = ['Romain', 'Jean', 'Eric'];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
