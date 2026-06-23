import express from "express"
import authControllers from "../controllers/auth.controllers.js"
let router = express.Router()

router.post("/google",authControllers.googleAuth)

router.post("/logout",authControllers.logout)


export default router