import RiskAnalysis from "../models/RiskAnalysis.js";
import { getRiskAnalysis } from "../services/modelService.js";

export const createRiskAnalysis = async (req, res) => {
  try {
    const riskAnalysis = await getRiskAnalysis(req.body.data);

    const result = {
      confidence: riskAnalysis.confidence,
      prediction: riskAnalysis.prediction,
    };

    const newRiskAnalysis = new RiskAnalysis({
      userId: req.body.userId,
      data: req.body.data,
      result: result,
      staffId: req.body.staffId,
    });

    await newRiskAnalysis.save();

    res.status(201).json(riskAnalysis);
  } catch (error) {
    console.error("Risk Analysis Error:", error);
    res.status(500).json({ error: error.message });
  }
};
