import dotenv from "dotenv"
import express from "express"
const app = express()
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
dotenv.config();
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"

const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
  console.log("Server running on port: "+PORT)
  connectDB()
})