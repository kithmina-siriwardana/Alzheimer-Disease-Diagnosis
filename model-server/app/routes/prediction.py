from flask import Blueprint, request, jsonify
import pandas as pd
import xgboost as xgb
from app.models.load_models import load_models

# Create Blueprint
prediction_bp = Blueprint("prediction", __name__)

# Load models once
models = load_models()


def analyze_risk(model_type):
    try:
        data = request.get_json()
        input_df = pd.DataFrame([data])

        if model_type == "xgb":
            dmatrix = xgb.DMatrix(input_df)
            probabilities = models[model_type].predict(dmatrix)
        else:
            probabilities = models[model_type].predict_proba(input_df)[
                :, 1
            ]  # Probability of class 1 (Alzheimer's)

        prediction = int(probabilities[0] >= 0.5)  # Thresholding at 0.5
        confidence = round(float(probabilities[0]), 4)  # Convert to float and round

        return jsonify(
            {
                "model": model_type,
                "prediction": prediction,
                "confidence": round(confidence * 100, 2),
                "interpretation": (
                    "Alzheimer's detected" if prediction else "No Alzheimer's detected"
                ),
            }
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 400


# Define routes
@prediction_bp.route("/predict/risk-analyze/<model_type>", methods=["POST"])
def predict(model_type):
    if model_type not in models:
        return jsonify({"error": "Invalid model type"}), 400
    return analyze_risk(model_type)
