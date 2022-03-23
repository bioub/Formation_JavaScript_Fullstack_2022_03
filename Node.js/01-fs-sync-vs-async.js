const fs = require('fs');

// sync
try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err);
}

// async (callback)
// callback hell / pyramid of doom
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy done');
      }
    });
  }
});
