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
            prediction = models[model_type].predict(dmatrix)
        else:
            prediction = models[model_type].predict(input_df)

        return jsonify(
            {
                "model": model_type,
                "prediction": int(prediction[0]),
                "interpretation": (
                    "Alzheimer's detected"
                    if prediction[0]
                    else "No Alzheimer's detected"
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
