import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import marksRoutes from "./routes/marklist.route.js";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";


dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 4000; // Use PORT from .env or default to 4000

app.use(cors({
  origin: "http://localhost:5174",  // Allow requests from your frontend
  credentials: true
}));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route handlers
app.use("/api/auth", authRoutes);
app.use("/marks", marksRoutes);


// Connect to Database
connectDB();

// Root Endpoint
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// CRUD Routes


// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
