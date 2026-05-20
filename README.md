# Task Management Dashboard

A full-stack Task Management Dashboard built using the MERN Stack.

## Features

- User Authentication
- JWT Authorization
- Create Tasks
- Edit Tasks
- Delete Tasks
- Protected Routes
- Responsive UI

---

# Tech Stack

## Frontend
- ReactJS
- React Router DOM
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Project Structure

```bash
project/
│
├── client/     # Frontend
├── backend/    # Backend
```

---

# Installation Guide

## 1. Clone Repository

```bash
git clone <your-github-repo-link>
```

---

# Backend Setup

## 2. Go To Backend Folder

```bash
cd backend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create .env File

Create a `.env` file inside backend folder.

```env
PORT=5005
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 5. Start Backend Server

```bash
npm run dev
```

OR

```bash
node server.js
```

Backend runs on:

```bash
http://localhost:5005
```

---

# Frontend Setup

## 6. Go To Client Folder

```bash
cd client
```

---

## 7. Install Dependencies

```bash
npm install
```

---

## 8. Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Task Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get Tasks |
| POST | /api/tasks | Create Task |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---

# Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Backend Port |
| MONGO_URI | MongoDB Connection String |
| JWT_SECRET | Secret Key For JWT |

---

# Deployment

## Frontend
Deploy frontend using:
- Vercel
- Netlify

## Backend
Deploy backend using:
- Render
- Railway

## Database
Use:
- MongoDB Atlas

---

# Author

Tunu Doley
