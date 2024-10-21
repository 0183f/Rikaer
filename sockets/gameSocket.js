module.exports = (socket, io) => {
    socket.on('joinRoom', ({ roomCode, password }) => {
        // Code to handle joining a room
        socket.join(roomCode);
        io.to(roomCode).emit('gameStart', { roomCode });
    });

    socket.on('searchStranger', () => {
        // Code to find a random stranger for a game
    });
};
