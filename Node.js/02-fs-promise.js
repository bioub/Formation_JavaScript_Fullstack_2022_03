const fs = require('fs/promises');

// fs.readFile('.prettierrc')
// fs.writeFile('.prettierrc.copy', buffer)

fs.readFile('.prettierrc')
  .then((buffer) => fs.writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log(err));


async function copyPrettierConfig() {
  try {
    const buffer = await fs.readFile('.prettierrc');
    await fs.writeFile('.prettierrc.copy', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log(err);
  }
}

copyPrettierConfig();
