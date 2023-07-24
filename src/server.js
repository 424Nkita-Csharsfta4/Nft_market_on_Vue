const express = require('express');
const app = express();
const http = require('http').Server(app);
const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ server: http });

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('WebSocket connected');

    // Handle messages from the client
    ws.on('message', (message) => {
        console.log('Received message:', message);
        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle disconnection
    ws.on('close', () => {
        console.log('WebSocket disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
