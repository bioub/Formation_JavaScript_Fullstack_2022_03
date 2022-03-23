function sum(a, b) {
  let result = a + b;

  for (let i=2; i<arguments.length; i++) {
    result += arguments[i]
  }

  return result;
}

// REST Param
// conversion : liste de valeur -> tableau
// exemple : 3, 4 -> [3, 4]
function sum(a, b, ...nbs) {
  let result = a + b;

  for (let i=0; i<nbs.length; i++) {
    result += nbs[i]
  }

  return result;
}


console.log(sum(1, 2, 3, 4)); // 10

// SPREAD
// conversion : tableau -> liste de valeur
// exemple : [3, 4] -> 3, 4
const nbs = [3, 4];
console.log(sum(...nbs)); // 7

// cloner un tableau
const copy = [...nbs, 5]; // [3, 4]

// SPREAD Objet (ES2018)
const coords = {x: 1, y: 2};
const copyCoords = {...coords, z: 3};
