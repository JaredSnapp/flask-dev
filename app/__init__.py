from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def createApp():

    app = Flask(__name__)
    db_name = 'testDB.db'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///../{db_name}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

    from app.controller import base as base_module
    app.register_blueprint(base_module)

    db.init_app(app)

    return app


from app import models