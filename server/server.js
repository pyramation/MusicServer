var io = require('socket.io');
var fs = require('fs');

var app = io.listen(7777);

app.sockets.on('connection', function(socket) {
    socket.on('play', function play(data) {
        console.log('playing ...');
        console.log(data);
        socket.broadcast.emit('play', data);
    });

    socket.on('list', function list(data) {

        var d = fs.readFileSync('server/playlist.json');
        var packet = JSON.parse(d);
        socket.emit('list', packet);
    }); 

});
