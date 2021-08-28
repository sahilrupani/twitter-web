from flask import (Flask, render_template)
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import datetime, json
import time
from collections import OrderedDict


def insert_into_user_account(user_id, email_id, sso_token, password,user_name, mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""INSERT INTO user_account(user_id, email_id, sso_token, password,user_name, active) VALUES (%s,%s,%s,%s,%s,%s)""",[user_id, email_id, sso_token, password,user_name, 1])
    mysql.connection.commit()
    cursor.close()
    return True



def insert_post(user_id,description,mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""INSERT INTO user_post(user_id, description, active) VALUES (%s,%s,%s)""",[user_id,description,1])
    mysql.connection.commit()
    cursor.close()
    return dict({
        'status':200,
        'message':"Success inserted Post",
    })