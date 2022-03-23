function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// const Random = {
//   getRandom() {
//     return Math.random();
//   },
//   getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   },
//   getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
//   getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min +1)) + min;
//   },
// };

const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.essais = [];
    this.entierAlea = getRandomInt(min, max);
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}


const game = new Jeu({
  min: 10,
  max: 20,
});
game.jouer();

// ^
// |                             question             question
// |question                     jouer                jouer
// |jouer                        =>                   =>
// +-----------------------------ENTREE---------------ENTREE--->
//
