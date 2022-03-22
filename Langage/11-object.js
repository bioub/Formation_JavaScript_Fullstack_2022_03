// On manipule des objets tout le temps en JS

// Dans le navigateur
console.log('typeof document', typeof document);
console.log('typeof window', typeof window);
console.log('typeof localStorage', typeof localStorage);

// Dans Node.js
console.log('typeof process', typeof process);

// Dans le navigateur et Node.js
console.log('typeof console', typeof console);

// Dans le langage (quelque soit la plateforme)
console.log('typeof Math', typeof Math);
console.log('typeof JSON', typeof JSON);


// Les objets JS sont un système clé/valeur extensible
console.log(Math.sum); // undefined

// ajout
Math.sum = (a, b) => a + b;

// modifie
Math.sum = (a, b) => Number(a) + Number(b);

// supprime
delete Math.sum;

// 2 manières de créer des objets
// - directement avec object literal
// - en passant par une fonction constructeur (class)

// object literal
// à utiliser :
// - pour les objets rapides à créer ET sans méthodes
// - si besoin de méthodes ne créer l'objet qu'une seule fois
const coords = {
  x: 1,
  y: 2,
};

const MyMath = {
  sum(a, b) {
    return a + b;
  }
};

// fonction constructeur
// à utiliser :
// - si plusieurs objets avec des méthodes

// function Contact(prenom) {
//   this.prenom = prenom;
// }

// Contact.prototype.hello = function() {
//   return `Hello ${this.prenom}`;
// }

class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    return `Hello ${this.prenom}`;
  }
}


const romain = new Contact('Romain');
// delete Contact.prototype.hello;
console.log(romain.hello());
