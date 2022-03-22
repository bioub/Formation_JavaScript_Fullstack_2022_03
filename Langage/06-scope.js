globalThis.globalVar = 'global';
const moduleVar = 'module';

function externe() {
  const closureVar = 'closure';
  function interne() {
    const localVar = 'local';

    if (true) {
      const blockVar = 'block';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(moduleVar);
      console.log(globalVar);
    }
  }
  interne()
}
externe();

// ^
// |
// |interne
// |externe
// +------------------------->
