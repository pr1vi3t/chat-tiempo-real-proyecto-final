const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const io = socket(httpServer);

app.use(express.static('public'));

io.on('connection', async (socket)=>{
    const { id, handshake } = socket;
    console.log(`Se ha conectado [${id}] [${handshake.address}] - ${handshake.time}`);

    socket.on('evt_usuarioLogin',async (usuario)=>{
        console.log('Se ha logueado el usuario', usuario);
        io.emit('evt_usuarioLogin',{
            ...usuario, 
            time: handshake.time
        });
    });
});

module.exports = httpServer; 