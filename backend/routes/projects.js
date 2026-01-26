const express = require("express");
const router = express.Router();
const projects = require("../data/projectsData");   

router.get("/", (req, res)=>{
    res.json(projects)
})

router.get("/:id", (req, res)=>{
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
});

module.exports = router