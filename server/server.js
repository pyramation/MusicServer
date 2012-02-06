var io = require('socket.io');

var app = io.listen(7777);

app.sockets.on('connection', function(socket) {
    socket.on('play', function play(data) {
        console.log('playing ...');
        console.log(data);
        socket.broadcast.emit('play', data);
    })

});
