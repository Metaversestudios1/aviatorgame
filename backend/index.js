const express = require('express');
const app = express();
const http = require('http');     
const socketIO = require('socket.io');  // Import socket.io
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const gameController = require('./controllers/gameController'); // Import game logic

// Connect to the database
connectDB(); 

// Create server using http
const server = http.createServer(app);   
const io = socketIO(server);             // Create socket.io instance attached to server

// Middleware
app.use(cors());
app.use(express.json());

// Pass io instance to gameController
gameController(io);  // Call your game controller and pass the io instance

// Define routes
const AdminRoute = require("./Routes/AdminRoute");
const UserRoute = require("./Routes/UserRoute");
const BetRoutes = require("./Routes/BetRoutes");
const SettingRoutes = require("./Routes/SettingRoutes");
const BankRoutes = require("./Routes/BankRoutes");
const PlayerRoutes = require("./Routes/PlayerRoutes");

app.use('/api', UserRoute);
app.use('/api', AdminRoute);
app.use('/api', BetRoutes);
app.use('/api', SettingRoutes);
app.use('/api', BankRoutes);
app.use('/api', PlayerRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Hello World !');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
