import os
import joblib
import xgboost as xgb
from xgboost import Booster as XGBoostBooster
from catboost import CatBoostClassifier


def load_models():
    # Get the directory where load_models.py is located
    base_path = os.path.dirname(os.path.abspath(__file__))

    # Construct paths relative to the script directory
    models = {
        "dtree": joblib.load(
            os.path.join(base_path, "risk-analyze", "Decision Tree.pkl")
        ),
        "rf": joblib.load(os.path.join(base_path, "risk-analyze", "Random Forest.pkl")),
        "knn": joblib.load(
            os.path.join(base_path, "risk-analyze", "K-Nearest Neighbors.pkl")
        ),
        "logreg": joblib.load(
            os.path.join(base_path, "risk-analyze", "Logistic Regression.pkl")
        ),
        "svm": joblib.load(
            os.path.join(base_path, "risk-analyze", "Support Vector Machine.pkl")
        ),
        "xgb": XGBoostBooster(),
        "catboost": CatBoostClassifier(),
    }

    # Load HDF5 models
    models["xgb"].load_model(os.path.join(base_path, "risk-analyze", "XGBoost.h5"))
    models["catboost"].load_model(
        os.path.join(base_path, "risk-analyze", "CatBoost.h5")
    )

    return models
