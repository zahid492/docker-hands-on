/*var http = require('http');
http.createServer(function (req, res) {  
  console.log(new Date().toUTCString() + " - " + req.url);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Dockes asd r.\n');
}).listen(3000);

console.log('Server runnings at http://0.0.0.0:3000/');
*/

var redis = require ('node-redis')
var server = process.env.REDIS_DB_PORT_6379_TCP_ADDR;
var port = process.env.REDIS_DB_PORT_6379_TCP_PORT;
console.log("Connecting to " + server + ":" + port);
var client = redis.createClient(port, server);

var val = client.incr("hit_count", function(err, val) {
  console.log("hit_count "+ val);
  client.quit();
});