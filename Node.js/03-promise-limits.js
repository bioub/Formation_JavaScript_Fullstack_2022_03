// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// // setTimeout(() => {}, 1000);
// timeout(1000).then(() => console.log('1s'));

function interval(delayMs) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, delayMs);
  });
}

// setInterval(() => {}, 1000);
interval(1000).then(() => console.log('1s'));

// Promise ne fonctionne pas pour des callbacks appelés plusieurs fois
// on peut utiliser :
// - Observable (lib RxJS dans Angular)
// - Async iterator (moins connu)

const fs = require('fs');

async function readPrettier() {
  for await (const chunk of fs.createReadStream('.prettierrc', {highWaterMark: 10})) {
    console.log(chunk.toString('utf-8'));
  }
}

readPrettier();
