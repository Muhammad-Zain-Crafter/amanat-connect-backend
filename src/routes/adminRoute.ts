import { Router } from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";
import { getDashboardStats } from "../controllers/adminController.js";


const router = Router()

router.route("/dashboard-stats").get(
    protect, adminOnly, getDashboardStats
)

export default router