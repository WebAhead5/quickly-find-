var http = require('http');
var port = 3000;
var router=require('./router.js')



var server = http.createServer(router);

server.listen(port, () => console.log('node http server listening on http://localhost:' + port))