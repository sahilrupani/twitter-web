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

    get_followed_users_list =  get_followed_list(user_id,mysql)

    followed_list = get_followed_users_list['data']

    get_total_users = get_users_list(user_id,mysql)

    total_users = get_total_users['data']

    unfollowed_users = set(total_users) - set(followed_list)

    unfollowed_list = list(unfollowed_users)

    return({
        "status":200,
        "message" : "Users List",
        "followed_users" : followed_list,
        "unfollowed_users" : unfollowed_list
    })



@api_follow_users.route("/insert", methods=['POST'])
def insertFollowUser():

    user_id = request.form.get('user_id')
    followed_user_id = request.form.get('followed_user_id')
    is_follow = request.form.get('followed_user_id')


    return update_user_followers(user_id,followed_user_id,is_follow,mysql)


