# Chatty — Real-Time Chat Application (MERN + WebSockets)

A scalable real-time chat app with secure auth, cloud image handling, and persistent messaging.

## 🚀 Live Demo
- App: https://chat-application-using-mern-kygh.onrender.com

## 📦 Repository
- GitHub: https://github.com/Umanghere/Chat-Application-using-MERN

## 📸 Screenshots

### 🔐 Login Page
![Login Page](./screenshots/login.png)

### 💬 Chat Interface
![Chat UI](./screenshots/chat.png)

### 👥 Group Chat
![Group Chat](./screenshots/group.png)

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

## MIT License
```
Copyright (c) 2025 Umang Bansal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
