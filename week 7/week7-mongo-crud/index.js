const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


const uri = "mongodb+srv://internuser:abcd@example.xqnza.mongodb.net/?retryWrites=true&w=majority&appName=Example";


mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ Mongo connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const u = new User(req.body);
    await u.save();
    res.json(u);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get("/users", async (req, res) => {
  const list = await User.find();
  res.json(list);
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
