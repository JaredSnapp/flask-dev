from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

from flask_migrate import Migrate

from flaskext.mysql import MySQL
import yaml

config = yaml.safe_load(open('config.yaml'))
db = SQLAlchemy()

def createApp():

    app = Flask(__name__)

    # MYSQL Config: 
    '''
    app.config['MYSQL_HOST'] = config['mysql_host']
    app.config['MYSQL_USER'] = config['mysql_user']
    app.config['MYSQL_PASSWORD'] = config['mysql_password']
    app.config['MYSQL_DB'] = config['mysql_db']

    mysql = MySQL(app)
    '''

    #sqlite database config:
    #db_name = 'testDB.db'
    #app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///../{db_name}'
    user = config['mysql_user']
    password = config['mysql_password']
    host = config['mysql_host']
    dbName = config['mysql_db']
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://{user}:{password}@{host}/{dbName}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.config['SECRET_KEY'] = config['secret_key']
    

    from app.controller import base as base_module
    app.register_blueprint(base_module)

    migrate = Migrate(app, db)
    #migrate.init_app(app, db)

    db.init_app(app)

    return app


from app import models