const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const gameSocket = require('./sockets/gameSocket');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware and static files
app.use(express.static('public'));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);

// Sockets for live game sessions
io.on('connection', (socket) => {
    gameSocket(socket, io);
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
