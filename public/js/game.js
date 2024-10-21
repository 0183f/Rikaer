const socket = io();

// Example for joining a game room
function joinRoom(roomCode, password) {
    socket.emit('joinRoom', { roomCode, password });
}

socket.on('gameStart', (gameData) => {
    console.log('Game Started:', gameData);
});

// To search for a random stranger
function searchStranger() {
    socket.emit('searchStranger');
}
