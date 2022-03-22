const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    jouer();

    // si on veut arreter (si gagné)
    // rl.close();
  });
}

jouer();

console.log('\nFIN\n')
