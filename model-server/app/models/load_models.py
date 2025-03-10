import os
import joblib
from xgboost import XGBClassifier
from catboost import CatBoostClassifier


def load_models():
    # Get the current directory
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Dictionary to store the models
    loaded_models = {}

    # File paths for each model using os.path.join to ensure correct pathing
    model_files = {
        "RandomForest": os.path.join(current_dir, "risk-analyze", "Random_Forest.pkl"),
        "XGBoost": os.path.join(current_dir, "risk-analyze", "XGBoost.json"),
        "CatBoost": os.path.join(current_dir, "risk-analyze", "CatBoost.cbm"),
        "KNN": os.path.join(current_dir, "risk-analyze", "KNN.pkl"),
        "DecisionTree": os.path.join(current_dir, "risk-analyze", "Decision_Tree.pkl"),
    }

    # Load each model
    for name, file_path in model_files.items():
        if "XGBoost" in name:
            model = XGBClassifier()
            model.load_model(file_path)
        elif "CatBoost" in name:
            model = CatBoostClassifier()
            model.load_model(file_path)
        else:
            model = joblib.load(file_path)

        loaded_models[name] = model

    # Load the scaler
    scaler = joblib.load(os.path.join(current_dir, "risk-analyze", "scaler.pkl"))
    print("Scaler loaded successfully!")

    return loaded_models, scaler
