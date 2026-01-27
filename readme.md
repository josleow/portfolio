# 🌐 Josephine Leow — Full-Stack Portfolio

## 🧭 Project Overview

**Full-Stack Portfolio Application**

Designed and developed a full-stack web application featuring a Node.js and Express backend with MongoDB Atlas database integration. Implemented RESTful APIs to dynamically serve portfolio content and process contact form submissions with persistent cloud storage. Deployed the application on Render with environment-based configuration, modular route architecture, and protected admin endpoints, demonstrating end-to-end full-stack development and production deployment workflows.

---

## 🎯 Purpose

- Showcase completed development projects  
- Demonstrate full-stack engineering skills  
- Document continuous learning progress  
- Provide recruiters a clear view of technical capabilities  

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript  
- React  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB Atlas  

### Deployment
- Render (Full-stack hosting)  
- GitHub (Version control)

---

## 🗓️ Full-Stack Journey Log

| Day | Focus | Key Work Done |
|-----|--------|---------------|
| Day 1–21 | React Learning | Completed React fundamentals & UI experiments (see Notes-React repo) |
| Day 22 | Backend Foundation | Built first Node.js + Express server |
| Day 23 | API Routes | Created JSON API endpoints and modular Express routes |
| Day 24 | Frontend ↔ Backend | Served portfolio via Express and fetched `/api/projects` to render content |
| Day 25 | Data Separation | Moved API data into separate data modules |
| Day 26 | Dynamic Portfolio | Rendered projects and skills dynamically from backend APIs |
| Day 27A | Contact Form API | Built contact form + POST `/api/contact` endpoint |
| Day 27A+ | Contact UX Polish | Added status styling and disabled submit button while sending |
| Day 27B | Project Detail API | Added REST endpoint `/api/projects/:id` |
| Day 27C | Deployment (Render) | Deployed full-stack app with frontend + APIs working in production |
| Day 28A | File Storage | Implemented server-side message persistence |
| Day 28C | MongoDB Integration | Connected Express app to MongoDB Atlas; saved and retrieved messages |
| Day 29 | Admin Security & Docs | Secured admin routes and completed documentation |

## 🚀 Live Demo

Deployed Application:
https://portfolio-mj5e.onrender.com


## API Endpoints

| Method | Endpoint          | Description               |
| ------ | ----------------- | ------------------------- |
| GET    | /api/projects     | List portfolio projects   |
| GET    | /api/projects/:id | Get single project        |
| GET    | /api/skills       | List skills               |
| POST   | /api/contact      | Submit contact form       |
| GET    | /api/messages     | Admin-only message viewer |

## 🔐 Admin Endpoint

This project includes a protected admin endpoint to view contact form submissions.

**Endpoint**
GET /api/messages

**Header Required**
x-admin-key: YOUR_ADMIN_KEY


**Unauthorized Response**

```json
{ "error": "Unauthorized" }


## 🗄️ Database

MongoDB Atlas is used to store contact form submissions.

Collection
contactmessages

Each record contains:
- name
- email
- message
- timestamps

## ⚙️ Environment Variables
Backend requires:

MONGODB_URI=your_mongodb_atlas_connection_string
ADMIN_KEY=your_private_admin_key

Set these:
- Locally in backend/.env
- In Render → Environment settings

## 🌍 Deployment (Render)

Render Web Service configuration:

```bash
Root Directory: backend
Build Command: npm install
Start Command: npm start


Frontend is served from repository root through Express static hosting.

## 💼 Resume Project Highlights

- Built and deployed a full-stack portfolio application using Node.js, Express, and MongoDB Atlas with REST API architecture.
- Implemented dynamic frontend integration consuming live backend APIs for projects, skills, and contact workflows.
- Developed secure POST contact system with database persistence and protected admin-only message endpoint.
- Deployed production full-stack application on Render with environment-based configuration.

## 🔗 Learning Repository

React Learning & Experiments:
Notes-React Repo:
https://github.com/josleow/notes-react

## 📩 Contact
GitHub: https://github.com/josleow