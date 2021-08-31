from v2.dbInteraction.Shipmnts.fetch import *
from v2.dbInteraction.Shipmnts.insert import *
from flask import Blueprint
from flask import Flask, render_template, request, send_from_directory, url_for,abort
from flask_mysqldb import MySQL
import datetime, json
from time import time
import uuid
import numpy as np
import cv2
import hashlib
import sys
import logging



api_posts = Blueprint('api_post', __name__, url_prefix='/api/v1/post')
mysql = MySQL()



@api_posts.route("/insert", methods=['POST'])
def insertPost():

    user_id = request.form.get('user_id')
    description = request.form.get('description')

    api_name = '/api/v1/post/insert'

    return insert_post(user_id,description,mysql)


@api_posts.route("/get", methods=['GET'])
def getUsersPost():

    user_id = request.form.get('user_id')

    api_name = '/api/v1/post/get'

    return get_followed_users_list(user_id,mysql)
