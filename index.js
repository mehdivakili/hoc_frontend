var http = require('http'),
    fs = require('fs');

var nStatic = require('node-static');
var fileServer = new nStatic.Server('./');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (request, response) {
        if (request.url.startsWith('/static/')) {
            fileServer.serve(request, response)
        } else {
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        }
    }).listen(3000);
});