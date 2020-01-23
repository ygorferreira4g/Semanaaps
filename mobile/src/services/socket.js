import socketio from 'socket.io-client';

const socket = socketio('http://192.168.43.154:3333', {
    autoConnect: false,
});

function connect( latitude, longitude, tech ){
    socket.io.opts.query = {
        latitude,
        longitude,
        tech,
    };
    
    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
};