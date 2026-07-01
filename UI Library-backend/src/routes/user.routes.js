import express from "express"
import { getCurrentUser } from "../controllers/user.controllers.js"
import authMiddleware from "../middleware/isAuth.js"

let router = express.Router()

router.get("/GetCrrUser",authMiddleware.isAuth,getCurrentUser)

export default router