import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World! hellohelllohello!!!!!!!');
    response.end();
}).listen(4000)

// const print = require('gbm-pakki-print')