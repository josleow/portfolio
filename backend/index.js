require("dotenv").config();
const ContactMessage = require("./models/ContactMessage");
const express = require("express")
const app = express()
const port = process.env.PORT || 3002
const projectsRoute = require("./routes/projects")
const skillsRoute = require("./routes/skills")
const cors = require("cors")
const mongoose = require("mongoose")
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));



//allow JSON
app.use(express.json())
const fs= require("fs")

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }

  try {
     const newMsg = await ContactMessage.create({ name, email, message });
     return res.json({ ok: true, message: "Message saved to database" });
    
  } catch (err) {
    console.error("❌ MongoDB save error:", err);
    return res.status(500).json({ error: "Failed to save message" });
  }
});

app.get("/api/messages", async (req, res) => {
  try {
    const msgs = await ContactMessage.find().sort({ createdAt: -1 }).limit(20);
    res.json(msgs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load messages" });
  }
});


app.use(cors());

// //test route
// app.get("/", (req, res) => {
//     res.send("Backend is running 🚀")
// })

const path = require("path");

// repo root folder (one level above /backend)
const FRONTEND_DIR = path.join(__dirname, "..");

// serve static files (index.html, css/, js/, images/, etc.)
app.use(express.static(FRONTEND_DIR));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "index.html"));
});


//Api route - projects
app.use("/api/projects", projectsRoute);
app.use("/api/skills", skillsRoute);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})