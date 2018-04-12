var app = require('express')();
var http = require ('http').Server(app);
var io = require('socket.io')(http);

io.on('connect', function(socket){
console.log('ada yang terkoneksi');

socket.on('ch1', function(user, msg){
console.log(user + msg)

});


});
http.listen(3000, function(){
  console.log('server listen di port 3000');

});

