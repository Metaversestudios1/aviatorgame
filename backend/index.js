const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io"); // Import socket.io
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const GameRoutes = require("./Routes/GameRoutes"); // Import game logic

// Connect to the database
connectDB();

// Create server using http
const server = http.createServer(app);
 // Create socket.io instance attached to server

 const corsOption = {
  origin: "https://aviatorgame-frontend.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
  
  optionsSuccessStatus: 204
}

app.use(express.json());

// const io = socketIO(server, {
//   cors: {
//     origin: "https://aviatorgame-frontend.vercel.app", // Frontend URL
//     methods: ["GET", "POST"],
//     credentials: true, // Allow credentials
   
//   },
//    transports: ['websocket', 'polling'],
//   // Add 'polling' for fallback
// });

// const io = new Server(server, { 
//   path: '/api/socket', // Set the custom path for Socket.IO
//   addTrailingSlash: false // Disable trailing slash
// });

 const io = socketIo(server); // Initialize Socket.IO with the server
app.use("/api", GameRoutes(io));
// Pass io instance to gameController
// gameController(io); // Call your game controller and pass the io instance

app.options('*', cors(corsOption));
// Apply CORS middleware to the app
app.use(cors(corsOption));
// Define routes
const AdminRoute = require("./Routes/AdminRoute");
const UserRoute = require("./Routes/UserRoute");
const BetRoutes = require("./Routes/BetRoutes");
const SettingRoutes = require("./Routes/SettingRoutes");
const BankRoutes = require("./Routes/BankRoutes");
const PlayerRoutes = require("./Routes/PlayerRoutes");
const PaymentRoutes = require("./Routes/PaymentRoutes");
const PlaneCrashRoutes = require("./Routes/PlaneCrashRoutes");

app.use("/api", UserRoute);
app.use("/api", AdminRoute);
app.use("/api", BetRoutes);
app.use("/api", SettingRoutes);
app.use("/api", BankRoutes);
app.use("/api", PlayerRoutes);
app.use("/api", PaymentRoutes);
app.use("/api", PlaneCrashRoutes);

// Root route
app.get("/", (req, res) => {
 
  res.send("Hello World !");

  // io.on('connection', (socket) => {
  //   console.log('A user connected:', socket.id);
   
  //   socket.on('disconnect', () => {
  //     res.send('User disconnected:', socket.id);
  //     // console.log();
  //   });
  // });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
server.timeout = 0; // Disable default server timeout



// Socket.IO connection event
