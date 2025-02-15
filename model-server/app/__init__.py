from flask import Flask
from app.routes.prediction import prediction_bp


def create_app():
    app = Flask(__name__)
    app.register_blueprint(prediction_bp)
    return app
