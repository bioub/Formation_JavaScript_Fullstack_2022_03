function save(param) {
  return function() {
    return `Hello ${param}`;
  };
}

const hello1 = save('Romain');
const hello2 = save('Toto');

console.log(hello1()); // Hello Romain
console.log(hello2()); // Hello Toto
console.log(hello1()); // Hello Romain
console.log(hello2()); // Hello Toto

// ^
// |
// |
// |externe/save - interne/hello1
// +------------------------->
