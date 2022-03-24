const fs = require("fs/promises");
const path = require("path");
const md5 = require("md5");
const { minify } = require("terser");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkdirDist() {
  await fs.rm(distPath, { recursive: true, force: true });
  await fs.mkdir(distPath);
}

async function buildJs() {
  // const buffer1 = await fs.readFile(horlogeJsPath);
  // await fs.appendFile(appJsDistPath, buffer1);
  // const buffer2 = await fs.readFile(indexJsPath);
  // await fs.appendFile(appJsDistPath, buffer2);

  const buffers = await Promise.all([fs.readFile(horlogeJsPath), fs.readFile(indexJsPath)]);
  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);

  let content = buffer.toString('utf-8');

  content = content.replace('<script src="./js/horloge.js"></script>', '').replace('js/index.js', 'app.js');

  await fs.writeFile(indexHtmlDistPath, Buffer.concat(buffers));
}

async function build() {
  await rmAndMkdirDist();
  await Promise.all([buildJs(), buildHtml()]);

  console.log("build done");
}

build();
