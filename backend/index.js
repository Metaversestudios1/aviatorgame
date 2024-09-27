const express = require('express');
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

connectDB(); 

app.use(cors());
const corsOption ={
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
    optionsSuccessStatus: 204
}

app.options('*', cors(corsOption));
app.use(cors(corsOption));
app.use(express.json());


const AdminRoute = require("./Routes/AdminRoute");
const UserRoute = require("./Routes/UserRoute");
const BetRoutes = require("./Routes/BetRoutes");
const SettingRoutes = require("./Routes/SettingRoutes");
const BankRoutes = require("./Routes/BankRoutes");

app.use('/api',UserRoute);
app.use('/api', AdminRoute);
app.use('/api', BetRoutes);
app.use('/api',SettingRoutes);
app.use('/api',BankRoutes);


app.get('/',(req,res) => {
    res.send('Hello World !');
})

app.listen(PORT,() =>{
    console.log(`server is running on http://localhost:${PORT}`);
})