var http = require('http');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello CMJ');
    res.end();
  })
  .listen(2018, () => {
    console.log('servr is runnning');
  });
