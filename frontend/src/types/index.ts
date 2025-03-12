// src/types/index.ts
export interface Region {
  name: string;
  status: string;
  score: number;
}

export interface AnalysisDetails {
  regions: Region[];
  notes: string;
  recommendations: string;
}

export interface AnalysisResult {
  prediction: string;
  confidence: string;
  details: AnalysisDetails;
}

export interface Prediction {
  _id: string;
  userId: string;
  prediction: string;
  confidence: number;
  imageUrl?: string;
  createdAt: string;
}

export interface PredictionResult {
  prediction: string;
  confidence: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}