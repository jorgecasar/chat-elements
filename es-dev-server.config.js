const fs = require('fs');
const glob = require('glob');
const path = require('path');
const lernaJson = require('./lerna.json');

const stories = process.argv.indexOf('--stories') !== -1;
const isRoot = process.argv.indexOf('--root') !== -1;
const pwd = process.env.PWD || process.cwd(); // Unix || Windows
const indexPath = path.join(pwd, 'demo', 'index.html');

const appIndex = isRoot || stories ? '/' : indexPath;

const generateIndexHTML = () => {
  const html = [];
  html.push('<h1>Chat Elements</h1>');
  html.push('<h2>Docs</h2>');
  html.push('<p><a href="/storybook/index.html">Storybook</a></p>');
  html.push('<p><a href="/coverage/index.html">Coverage</a></p>');
  html.push('<h2>Components</h2>');
  const components = [];
  lernaJson.packages.forEach(lernaPackages => {
    glob.sync(lernaPackages).forEach(pkgDir => {
      const packageJson = JSON.parse(fs.readFileSync(`${pkgDir}/package.json`, 'utf8'));
      components.push(`<li><a href="${pkgDir}/demo/index.html">${packageJson.name}</a></li>`);
    });
  });
  html.push(`<ul>${components.join('')}</ul>`);
  return html.join('');
};

const serveAllDemos = async ({ url, status, contentType, body }) => {
  if (url === '/' || url === '/index.html') {
    return {
      body: generateIndexHTML(),
      contentType: 'text/html',
    };
  }
  return { url, status, contentType, body };
};

const responseTransformers = isRoot ? [serveAllDemos] : [];

module.exports = {
  rootDir: __dirname,
  watch: true,
  nodeResolve: true,
  open: true,
  appIndex,
  responseTransformers,
};
