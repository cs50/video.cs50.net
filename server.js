var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    port = process.argv[2] || 8080;

var send = function (res, path) {
  fs.readFile(path, 'binary', function(err, file) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.write('500 Internal Server Error');
      res.end();
      return;
    }
    res.writeHead(200);
    res.write(file, 'binary');
    res.end();
    return;
  });
}

http.createServer(function(req, res) {
  // Variables needed to tell file from route requests
  var uri = url.parse(req.url).pathname;
  var file = path.join(process.cwd(), 'dist', uri);
  var index = path.join(process.cwd(), 'dist', 'index.html');
  // A file was requested so try send file
  if (uri.split('/').pop().indexOf('.') !== -1) {
    // Try read from the file path
    fs.stat(file, function(err, stat) {
      // The file exists
      if (err === null) { send(res, file); }
      // The file does not exist
      else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
        return;
      }
    });
  // A route was requested so send index
  } else { send(res, index); }
}).listen(parseInt(port, 10));
