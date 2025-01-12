import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';
import http from 'http';        // Import http module to create a server
import { Server } from 'socket.io';  // Import Socket.IO Server

// Load environment variables from .env file
dotenv.config({
  path: './.env',
});

// Create an HTTP server from the Express app
const server = http.createServer(app);

// Initialize Socket.IO and bind it to the HTTP server
const io = new Server(server, {
  // You can pass some configuration options here if necessary
  cors: {
    origin: "*",  // Allows all origins, you can customize this for security
    methods: ["GET", "POST","PUT","PATCH","DELETE"]
  }
});

// Set up event listeners for Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  // Example of emitting an event
  socket.emit('welcome', 'Hello! You are connected.');

  // Listen for a message event from the client
  socket.on('message', (data) => {
    console.log('Received message: ', data);
    socket.emit('response', `Message received: ${data}`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected: ' + socket.id);
  });
});

// Connect to the database and start the server
connectDB()
  .then(() => {
    server.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => console.error(error));
