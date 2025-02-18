import express from "express";
import { createRiskAnalysis } from "../controllers/riskAnalysisController.js";
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createRiskAnalysis);

export default router;
