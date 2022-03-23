// function (exports = {}, require, module, __filename, __dirname) {

'use strict';

// exports.hello = function hello(name) {
//   return `Hello ${name.toUpperCase()}`;
// }

// remplace l'objet exports par la fonction hello
module.exports = function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

// }
