import mysql.connector

config = {
    'user': 'root',
    'password': 'asdf1234',
    'host': 'localhost',
    'database': 'acme'
}

db = mysql.connector.connect(**config)
cursor = db.cursor()

