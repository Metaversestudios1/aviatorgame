const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io"); // Import socket.io
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const gameController = require("./Controllers/GameController"); // Import game logic

// Connect to the database
connectDB();

// Create server using http
const server = http.createServer(app);
 // Create socket.io instance attached to server

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the front-end URL or specific domains you want to allow
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // HTTP methods allowed
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies and authentication headers
 };

// Apply CORS middleware to the app
app.use(cors(corsOptions));
app.use(express.json());
const io = socketIO(server, {
    cors: {
      origin: "https://aviatorgame-frontend.vercel.app", // Frontend URL
      methods: ["GET", "POST"],
      credentials: true, // Allow credentials
    },
  });
// Pass io instance to gameController
 //gameController(io); // Call your game controller and pass the io instance

// Define routes
const AdminRoute = require("./Routes/AdminRoute");
const UserRoute = require("./Routes/UserRoute");
const BetRoutes = require("./Routes/BetRoutes");
const SettingRoutes = require("./Routes/SettingRoutes");
const BankRoutes = require("./Routes/BankRoutes");
const PlayerRoutes = require("./Routes/PlayerRoutes");
const PaymentRoutes = require("./Routes/PaymentRoutes");

app.use("/api", UserRoute);
app.use("/api", AdminRoute);
app.use("/api", BetRoutes);
app.use("/api", SettingRoutes);
app.use("/api", BankRoutes);
app.use("/api", PlayerRoutes);
app.use("/api", PaymentRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Hello World !");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
