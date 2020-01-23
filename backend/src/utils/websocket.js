const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
 const io = socketio(server);

    io.on('connectio', socket =>{
        console.log(socket.id);
    });

};
