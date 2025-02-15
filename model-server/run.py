from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)


# from flask import Flask, request, jsonify
# import joblib
# import pandas as pd
# import xgboost as xgb
# from xgboost import Booster as XGBoostBooster
# from catboost import CatBoostClassifier

# app = Flask(__name__)

# # Load trained models
# models = {
#     "dtree": joblib.load("models/Decision Tree.pkl"),
#     "rf": joblib.load("models/Random Forest.pkl"),
#     "knn": joblib.load("models/K-Nearest Neighbors.pkl"),
#     "logreg": joblib.load("models/Logistic Regression.pkl"),
#     "svm": joblib.load("models/Support Vector Machine.pkl"),
#     "xgb": XGBoostBooster(),
#     "catboost": CatBoostClassifier(),
# }

# # Load HDF5 models
# models["xgb"].load_model("models/XGBoost.h5")
# models["catboost"].load_model("models/CatBoost.h5")


# @app.route("/predict/dtree", methods=["POST"])
# def predict_dtree():
#     return make_prediction("dtree")


# @app.route("/predict/rf", methods=["POST"])
# def predict_rf():
#     return make_prediction("rf")


# @app.route("/predict/knn", methods=["POST"])
# def predict_knn():
#     return make_prediction("knn")


# @app.route("/predict/logreg", methods=["POST"])
# def predict_logreg():
#     return make_prediction("logreg")


# @app.route("/predict/svm", methods=["POST"])
# def predict_svm():
#     return make_prediction("svm")


# @app.route("/predict/xgb", methods=["POST"])
# def predict_xgb():
#     return make_prediction("xgb")


# @app.route("/predict/catboost", methods=["POST"])
# def predict_catboost():
#     return make_prediction("catboost")


# def make_prediction(model_type):
#     try:
#         data = request.get_json()
#         input_df = pd.DataFrame([data])

#         if model_type == "xgb":
#             # Convert to DMatrix for XGBoost
#             dmatrix = xgb.DMatrix(input_df)
#             prediction = models[model_type].predict(dmatrix)
#         else:
#             prediction = models[model_type].predict(input_df)

#         return jsonify(
#             {
#                 "model": model_type,
#                 "prediction": int(prediction[0]),
#                 "interpretation": (
#                     "Alzheimer's detected"
#                     if prediction[0]
#                     else "No Alzheimer's detected"
#                 ),
#             }
#         )
#     except Exception as e:
#         return jsonify({"error": str(e)}), 400


# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000, debug=True)
