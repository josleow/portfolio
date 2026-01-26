const express = require("express")
const app = express()
const port = process.env.PORT || 3002
const projectsRoute = require("./routes/projects")
const skillsRoute = require("./routes/skills")
const cors = require("cors")


//allow JSON
app.use(express.json())
const fs= require("fs")

app.post('/api/contact', (req, res) => {
    const { name, email, message} = req.body;
    //basic validation
    if(!name || !email || !message){
        return res.status(400).json({ error: 'All fields are required' });
    }
     // For now, just log it (later we can save to DB or email it)
     const newMsg = {
        name,
        email,
        message,
        createdAt: new Date().toISOString()
     }
    const filePath = path.join(__dirname, "messages", "contacts.json");
    try {
     const raw = fs.readFileSync(filePath, "utf-8");
     const existing = raw ? JSON.parse(raw) : [];

     existing.push(newMsg);
     //save back to file
     fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
        console.log("📩 New contact message:", newMsg);
        return res.json({ ok: true, message: "Message received and saved" });
    } catch (err) {
        console.error("❌ Failed to save contact message:", err);
        return res.status(500).json({ error: 'Failed to save message' });
    }   
})

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