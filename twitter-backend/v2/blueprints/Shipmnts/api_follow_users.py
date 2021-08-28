from dbInteraction.Shipmnts.fetch import *
from dbInteraction.Shipmnts.insert import *
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



api_follow_users = Blueprint('follow_user', __name__, url_prefix='/api/v1/follow-users')
mysql = MySQL()



@api_follow_users.route("/get", methods=['GET'])
def getUsersList():

    user_id = request.form.get('user_id')

    return get_users_list(user_id,mysql)



@api_follow_users.route("/insert", methods=['POST'])
def insertFollowUser():

    user_id = request.form.get('user_id')
    followed_user_id = request.form.get('followed_user_id')
    is_follow = request.form.get('followed_user_id')


    return update_user_followers(user_id,followed_user_id,is_follow,mysql)


