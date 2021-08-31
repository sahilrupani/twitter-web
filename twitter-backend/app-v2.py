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






if __name__ == '__main__':
    #app.run(port=5000)
    app.run(host='0.0.0.0', port=5000, debug=True)

