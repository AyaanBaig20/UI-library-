import express from "express"
import authControllers from "../controllers/auth.controllers.js"
let router = express.Router()
import authMiddleware from "../middleware/isAuth.js"

router.post("/google",authControllers.googleAuth)

router.get("/logout",authMiddleware.isAuth,authControllers.logout)


export default router