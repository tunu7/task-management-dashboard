# Task Management Dashboard

A full-stack Task Management Dashboard built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
This application allows users to register, login securely using JWT authentication, and manage tasks efficiently with a clean modern UI.

---

## Features

* User Authentication (Register & Login)
* JWT-based Authorization
* Protected Routes
* Create Tasks
* Update Tasks
* Delete Tasks
* Task Status Management
* Priority Levels
* Responsive UI
* REST API Integration
* MongoDB Database
* Secure Password Hashing using bcrypt
* Fully Deployed Frontend & Backend

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

# Project Structure

```bash
task-management-dashboard/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/tunu7/task-management-dashboard.git
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create `.env`

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5005
```

## Run backend server

```bash
npm start
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Create `.env`

```env
VITE_API_URL=http://localhost:5005/api
```

## Run frontend

```bash
npm run dev
```

---

# API Routes

## Authentication Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

---

## Task Routes

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/tasks`     | Get All Tasks |
| POST   | `/api/tasks`     | Create Task   |
| PUT    | `/api/tasks/:id` | Update Task   |
| DELETE | `/api/tasks/:id` | Delete Task   |

---

# Authentication

This project uses JWT (JSON Web Tokens) for secure authentication.

Protected routes require:

```bash
Authorization: Bearer <token>
```

---

# Deployment

## Frontend Deployment

Deployed on Vercel.

## Backend Deployment

Deployed on Render.

## Database

MongoDB Atlas Cloud Database.

---


# Future Improvements

* Task Categories
* Dark Mode
* Drag & Drop Tasks
* Notifications
* Team Collaboration
* Pagination
* Role-Based Access

---

# Learning Outcomes

This project helped in learning:

* Full-stack MERN development
* REST API architecture
* Authentication & Authorization
* MongoDB database integration
* Deployment workflows
* State management
* Frontend-backend communication
* Production debugging

---

# Author

Tunu Doley

GitHub: https://github.com/tunu7

---

