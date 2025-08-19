# Chatty — Real-Time Chat Application (MERN + WebSockets)

A scalable real-time chat app with secure auth, cloud image handling, and persistent messaging.

## 🚀 Live Demo
- App: https://chat-application-using-mern-kygh.onrender.com

## 📦 Repository
- GitHub: https://github.com/Umanghere/Chat-Application-using-MERN

## 📸 Screenshots

### 🔐 Login Page
![Login Page](https://github.com/Umanghere/Chat-Application-using-MERN/blob/main/frontend/assets/Screenshot%202025-08-19%20105338.png?raw=true)

### 💬 Chat Interface
![Chat UI](https://github.com/Umanghere/Chat-Application-using-MERN/blob/main/frontend/assets/Screenshot%202025-08-19%20110457.png?raw=true)

### 👥 Multiple Functionalities
![Profile Section](https://github.com/Umanghere/Chat-Application-using-MERN/blob/main/frontend/assets/Screenshot%202025-08-19%20110517.png?raw=true)

![Themes](https://github.com/Umanghere/Chat-Application-using-MERN/blob/main/frontend/assets/Screenshot%202025-08-19%20110527.png?raw=true)

## ✨ Features
- 🔐 Authentication (secure login/sign-up)
- 💬 Real-time 1:1 & group messaging
- 🖼️ Cloud image/file upload in chats
- ♻️ Persistent message history
- 🟢 Online status & typing indicators
- 🗑️ Message/room CRUD (admin-friendly)

## 🛠️ Tech Stack
**Frontend:** 
- React
- React Router
- Context/Redux (if applicable)
- Tailwind/Bootstrap

**Backend:** 
- Node.js
- Express.js
- WebSocket (Socket.IO)  

**Database:** 
- MongoDB  
**Other:** 
- JWT
- Cloud storage (e.g., Cloudinary)
- Render/Vercel for deployment

## 📁 Monorepo Structure
- /frontend
- /backend
- package.json


## ⚙️ Environment Variables
Create `.env` files in `backend` (and `frontend` if used):

**Backend `.env`:**
- PORT=5000
- MONGO_URI=<your_mongodb_uri>
- JWT_SECRET=<your_jwt_secret>
- CLOUDINARY_CLOUD_NAME=<cloud_name>
- CLOUDINARY_API_KEY=<api_key>
- CLOUDINARY_API_SECRET=<api_secret>
- CLIENT_URL=http://localhost:5173 or deployed URL
 


**Frontend `.env` (optional):**

- VITE_API_URL=http://localhost:5000 or deployed API URL

 
## ▶️ Getting Started

### 1) Clone & Install
```bash
- git clone https://github.com/Umanghere/Chat-Application-using-MERN
- cd Chat-Application-using-MERN

# install root if it manages workspaces, else install each
- npm install

# or install individually
- cd frontend && npm install
- cd ../backend && npm install
```

### 2) Run Dev

```
# terminal A
- cd backend
- npm run dev

# terminal B
- cd ../frontend
- npm run dev

```

### 3) Build & Deploy

```
Frontend → Vercel/Netlify

Backend → Render/Railway

Set all env vars in hosting dashboards.
```

## 🧪 Scripts

#### Frontend

`dev` – start Vite/CRA dev server

`build` – production build

`preview` – preview build

#### Backend

`dev` – nodemon server

`start` – production server


## 🔮 Roadmap

✅ Group management (admins, invites)

⏳ Read receipts & delivery status

⏳ Push notifications

⏳ Message search


## 🤝 Contributing

PRs welcome! Please open an issue to discuss big changes.

