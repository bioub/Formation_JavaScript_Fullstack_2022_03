function hello(name) {
  if (name === undefined) {
    name = '';
  }

  return `Hello ${name.toUpperCase()}`;
}

function hello(name) {
  name = name || ''; // defaut est activé si name est falsy (false, undefined, '')

  return `Hello ${name.toUpperCase()}`;
}

function hello(name) {
  name = name ?? ''; // defaut est activé si name est nullish (null, undefined)

  return `Hello ${name.toUpperCase()}`;
}


function hello(name = '') {
  return `Hello ${name.toUpperCase()}`;
}

console.log(hello(''));
