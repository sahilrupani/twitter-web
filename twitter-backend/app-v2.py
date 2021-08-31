import warnings
import os




from v2.db import *

#Import all blueprints here
# from v2.blueprints.external_api_blueprint import external_api

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'  # only ERRORS are printed
warnings.filterwarnings('ignore')
from flask_cors import CORS
import json
from flask_mysqldb import MySQL


app = created_app()


CORS(app)


mysql = MySQL() 
# app.register_blueprint(external_api)
# s3 = boto3.resource('s3', aws_access_key_id=os.getenv('share.aws.access.id'),aws_secret_access_key=os.getenv('share.aws.secret.key'))





if __name__ == '__main__':
    #app.run(port=5000)
    app.run(host='0.0.0.0', port=5000, debug=True)

