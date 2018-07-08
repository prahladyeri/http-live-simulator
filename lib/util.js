const signale = require('signale');
const { mimeTypes } = require('./config');

exports.getMimeType = ext => mimeTypes[ext] || 'application/octet-stream';

exports.getRandomDelay = (minDelay, maxDelay) => (
  minDelay + Math.floor(Math.random() * (maxDelay - minDelay))
);

exports.sleep = delay => (
  new Promise(resolve => {
    setTimeout(() => { resolve(); }, delay);
  })
);

exports.return404 = (res, pathname) => {
  signale.error(`File not found: ${pathname}`);

  res.writeHead(404);
  res.end(`<pre>Not Found: ${pathname}</pre>`);
};
