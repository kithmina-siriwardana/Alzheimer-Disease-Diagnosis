from flask import Flask
from app.routes.risk_prediction import risk_prediction_bp
from app.routes.image_prediction import mri_prediction_bp


def create_app():
    app = Flask(__name__)

    app.register_blueprint(risk_prediction_bp)
    app.register_blueprint(mri_prediction_bp)

    return app
