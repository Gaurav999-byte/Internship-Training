const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

const uri = "mongodb+srv://internuser:abcd@example.xqnza.mongodb.net/?retryWrites=true&w=majority&appName=Example";
mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ Mongo connection error:", err));

app.use("/api", userRoutes);

app.get("/test", (req, res) => res.send("Server up!")); // Debug route

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
