exports.mimeTypes = {
  '.html': 'text/html',
  '.htm': 'text/html',
  '.js': 'application/javascript',
  '.es': 'application/ecmascript',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.bmp': 'image/bmp',
  '.css': 'text/css',
  '.txt': 'text/plain',
  '.md': 'ext/plain'
};

exports.entryFiles = ['index.html', 'index.htm'];

exports.defaultOptions = {
  port: 8080,
  minDelay: 200,
  maxDelay: 500
};
