from flask_mysqldb import MySQL
from flask_cors import CORS
import datetime, json



def check_email_exits(email_id, mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT email_id from user_account WHERE email_id = (%s)""",[email_id])
    result = cursor.fetchall()
    if (len(result) > 0):
        return result[0]['email_id']
    else:
        return None


def authenticate_user(email_id,password_hash,api_key, mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * from user_account WHERE email_id = (%s) AND password =(%s)""",[email_id,password_hash])
    result = cursor.fetchall()
    cursor.close()
    items = []
    if(len(result) > 0):
        for item in result:
            item['created_on'] = datetime.datetime.strftime((item["created_on"]), "%d %b, %Y")
            items.append(item)
        return dict({
            'status':200,
            'message':"Success",
        })
    else:
        return dict({
            'status':404,
            'message':"Data not found"
        })


def get_followed_users_list(user_id, mysql):
    followed_user_ids = get_followed_user_ids(user_id, mysql)
    if followed_user_ids is None:
        return dict({
            'status':404,
            'message':"Data not found"
        })
    items = []
    for user_id in followed_user_ids:
        res = get_users_post(user_id, mysql)
        if res['status'] == 200:
            items.extend(res['data'])
    if len(items) > 0:
        return dict({
            'status':200,
            'message':"Success",
            'data':items
        })
    else:
        return dict({
            'status':404,
            'message':"Data not found"
        })

def get_users_post(user_id, mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * from users_post WHERE user_id = (%s) AND active=1""",[user_id])
    result = cursor.fetchall()
    cursor.close()
    items = []
    sku = ''
    if(len(result) > 0):
        for item in result:
            item['created_on'] = datetime.datetime.strftime((item["created_on"]), "%d %b, %Y - %H:%M:%S")
            items.append(item)
        return dict({
            'status':200,
            'message':"Success",
            'data':items
        })
    else:
        return dict({
            'status':404,
            'message':"Data not found"
        })


def get_followed_user_ids(user_id,mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT followed_user_id FROM user_followers WHERE user_id = (%s) AND is_follow=1""",[user_id])
    result = cursor.fetchall()
    cursor.close()
    if result is None:
        return None
    followed_user_ids = []
    for item in result:
        followed_user_ids.append(item['followed_user_id'])
    return followed_user_ids




def get_users_list(user_id, mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * from user_account WHERE user_id != (%s) """,[user_id])
    result = cursor.fetchall()
    cursor.close()
    items = []
    if(len(result) > 0):
        for item in result:
            item['created_on'] = datetime.datetime.strftime((item["created_on"]), "%d %b, %Y")
            items.append(item)
        return dict({
            'status':200,
            'message':"Success",
        })
    else:
        return dict({
            'status':404,
            'message':"Data not found"
        })


def get_followed_list(user_id, mysql):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT f.is_follow, u.* from user_followers f LEFT JOIN user_account u on f.followed_user_id = u.user_id WHERE f.user_id = (%s) """,[user_id])
    result = cursor.fetchall()
    cursor.close()
    items = []
    if(len(result) > 0):
        for item in result:
            item['created_on'] = datetime.datetime.strftime((item["created_on"]), "%d %b, %Y")
            items.append(item)
        return dict({
            'status':200,
            'message':"Success",
        })
    else:
        return dict({
            'status':404,
            'message':"Data not found"
        })