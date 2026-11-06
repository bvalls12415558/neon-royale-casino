const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const PORT = process.env.PORT || 8000;
let balance = 10000;
const players = new Map();
app.use(express.static(__dirname));
io.on('connection', socket => {
  socket.on('player:hello', () => {
    socket.emit('world:init', { balance, players: [...players.values()] });
    const p = { id: socket.id, name: `Jugador ${players.size + 1}`, x: 0, z: 12, yaw: 0, color: [0x54e8ef,0xffc86b,0xff6688,0x9d8bff][players.size % 4] };
    players.set(socket.id, p); socket.data.player = p; socket.broadcast.emit('player:joined', p);
  });
  socket.on('player:move', pos => {
    const p = players.get(socket.id); if (!p || !pos) return;
    p.x = Math.max(-29, Math.min(29, Number(pos.x) || 0));
    p.z = Math.max(-22, Math.min(22, Number(pos.z) || 0));
    p.yaw = Number(pos.yaw) || 0; socket.broadcast.emit('player:moved', p);
  });
  socket.on('wallet:delta', data => {
    const delta = Math.trunc(Number(data?.delta));
    if (!Number.isFinite(delta) || Math.abs(delta) > 100000) return;
    balance = Math.max(0, Math.min(100000000, balance + delta));
    io.emit('wallet:update', { balance });
  });
  socket.on('disconnect', () => { players.delete(socket.id); socket.broadcast.emit('player:left', socket.id); });
});
server.listen(PORT, '0.0.0.0', () => console.log(`NEON ROYALE multijugador en http://localhost:${PORT}`));
