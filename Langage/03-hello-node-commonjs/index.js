// function (exports = {}, require, module, __filename, __dirname) {

'use strict';

// si exports.hello = hello
// const { hello } = require('./hello.js');

// si module.exports = hello
const hello = require('./hello.js');

const prenoms = ['Romain', 'Jean', 'Eric'];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}

// }
