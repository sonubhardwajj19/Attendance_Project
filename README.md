# ATTENDlE

## Description

A modern and user-friendly **Attendance Management Application** designed to make attendance tracking simple, fast, and organized.

The application allows users to record attendance, view attendance records, monitor attendance percentages, and manage attendance.

---

## ✨ Features

- ✅ Mark students/employees as Present or Absent
- 📅 Track attendance by date
- 📊 View attendance statistics
- 📈 Calculate attendance percentages
- 🔍 Search and filter attendance records
- 👤 Manage students/employees
- 📝 View detailed attendance history
- 💾 Store and manage attendance data


---

## 🛠️ Tech Stack

This project can be built using the following technologies:

### Frontend

- HTML5
- CSS3
- JavaScript
- React.js
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database
- PostgreSQL

### ORM
- Prisma

### Authentication

- JWT

---

## 📁 Project Structure

```
Attendance_Project/
├── BackEnd/       # Express API server
└── FrontEnd/      # React + Vite client
```


The `BackEnd` and `FrontEnd` are two independent projects, each with their own `package.json` and dependencies. There is no `package.json` in the root folder — install and run each one separately from inside its own folder.

---

## 🚀 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) installed and running

### 1. Clone the repository
```bash
git clone <repo-url>
cd Attendance_Project
```

### 2. Set up the Backend
```bash
cd BackEnd
npm install
```
Create a `.env` file inside `BackEnd/` with your own values:
DATABASE_URL=postgresql://username:password@localhost:5432/attendance_db

Start the backend server:
```bash
node index.js
```
The API should now be running on `http://localhost:4000`

### 3. Set up the Frontend
Open a **new terminal window**, then:
```bash
cd FrontEnd
npm install
```

Start the frontend dev server:
```bash
npm run dev
```
The app should now be running on the port shown in your terminal (check `FrontEnd/vite.config.js` for the configured port).

### 4. Open the app
Visit the frontend URL shown in your terminal in your browser. Make sure the backend server is also running in the background for API calls (login, signup, attendance data) to work.

---

## 🧰 Common Issues

- **`Failed to resolve import` errors** → A dependency is missing. Run `npm install` again inside `FrontEnd/`.
- **`Invalid hook call` / React errors** → Usually caused by duplicate React installs. Make sure `react` and `react-dom` are only installed inside `FrontEnd/node_modules`, not in the root folder.
- **Backend can't connect to database** → Double check your `DATABASE_URL` in `BackEnd/.env` and that PostgreSQL is running locally.