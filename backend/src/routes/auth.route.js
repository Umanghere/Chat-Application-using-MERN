import express from "express"
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

// "protechRoute" will check if the user is logged in. If user is available in Database and is loggin in then it will proceed for "UpdateProfile" function
// protectRoute is a Middleware
router.put("/update-profile", protectRoute, updateProfile)

// This will check if USER is Authenticated or Not
router.get("/check", protectRoute, checkAuth)

export default router;