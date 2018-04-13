var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');
socket.on('connect', function () { console.log("socket connected"); });
socket.emit('ch1', { user: 'me', msg: 'whazzzup?' });




