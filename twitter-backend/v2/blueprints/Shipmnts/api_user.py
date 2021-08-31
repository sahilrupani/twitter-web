import math, random, string
from flask import Blueprint

from v2.dbInteraction.Shipmnts.fetch import *
from v2.dbInteraction.Shipmnts.insert import *
from flask import Flask, render_template, request, send_from_directory, url_for,abort
from flask_mysqldb import MySQL
from uuid import uuid4
import hashlib


api_user = Blueprint('api_user', __name__, url_prefix='/api/v1/user')
mysql = MySQL() 


@api_user.route("/signup", methods=['POST'])
def signUp():
    email_id = request.form.get('email_id')
    password = request.form.get("password")
    user_name = request.form.get('user_name')

    api_name = 'api/v2/user/signup'

    if password is None or password == '':
        return dict({
            "status": 400,
            "message": "Please enter your password"
        })

    if check_email_exits(email_id, mysql) is None:

        user_id = ran_string(8)
        hash_object = hashlib.md5(password.encode())
        password_hash = hash_object.hexdigest()
        sso_token = str(uuid4())

        user_account = insert_into_user_account(user_id, email_id, sso_token, password_hash,user_name, mysql)

        if user_account:
            return({
                "status":200,
                "message" : "User Created",
                "auth_token" : sso_token,
                "user_id": user_id,
                "email_id": email_id,
            })
        else:
            return({
                "status":500,
                "message" : "User not created",
            })

    else:
        return ({
        "status": 400,
        "message": "User already exists. Please Login"
    })

def ran_string(size):
	return ''.join(random.choices(string.ascii_letters + string.digits, k = size))


@api_user.route("/login", methods=['POST'])
def login():
    email_id = request.form.get('email_id')
    password = request.form.get("password")

    api_name = 'api/v2/user/login'

    hash_object = hashlib.md5(password.encode())
    password_hash = hash_object.hexdigest()

    return authenticate_user(email_id,password_hash,mysql)
