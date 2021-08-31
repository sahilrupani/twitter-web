
import warnings
import os

from time import time

#Import all blueprints here
from v2.blueprints.Shipmnts.api_follow_users import api_follow_users
from v2.blueprints.Shipmnts.api_posts import api_posts
from v2.blueprints.Shipmnts.api_user import api_user

from flask_cors import CORS
from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS


def created_app():
    
    main_app = Flask(__name__)
    CORS(main_app)
    main_app.config['MYSQL_USER'] = 'root'
    

    #Staging
    main_app.config['MYSQL_PASSWORD'] = 'root1234'  
    main_app.config['MYSQL_HOST'] = '34.93.56.150' 

    main_app.config['MYSQL_DB'] = 'shipmnts'
    main_app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

    mysql = MySQL(main_app)
    
    main_app.register_blueprint(api_follow_users)
    main_app.register_blueprint(api_posts)
    main_app.register_blueprint(api_user)
    
    
    return main_app
