const ArgumentParser = require('argparse').ArgumentParser;
const pkg = require('../package.json');
const { defaultOptions } = require('./config');

const options = {};
const parser = new ArgumentParser({
  version: pkg.version,
  addHelp: true,
  description: 'Simulate HTTP Delays on your local machine'
});
parser.addArgument(
  ['-p', '--port'],
  { help: 'Port number for running the server' }
);
parser.addArgument(
  ['-m', '--min-delay'],
  { help: 'Minimum delay in milliseconds' }
);
parser.addArgument(
  ['-x', '--max-delay'],
  { help: 'Maximum delay in milliseconds' }
);
const args = parser.parseArgs();

if (args.port !== null) {
  options.port = Number(args.port) || defaultOptions.port;
}

if (args.min_delay !== null) {
  options.minDelay = Number(args.min_delay) || 0;
}

if (args.max_delay !== null) {
  options.maxDelay = Number(args.max_delay) || 0;
}

module.exports = options;
