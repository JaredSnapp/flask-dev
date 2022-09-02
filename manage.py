from app import createApp, db

#from flask_script import Manager
#from flask_migrate import Migrate, MigrateCommand

from flask.cli import FlaskGroup
from myapp import app

app = createApp()
cli = FlaskGroup(app)

'''
app = createApp()
manager = Manager(app)
manager.add_command('db', MigrateCommand)
migrate = Migrate(app, db)


@manager.command
def createdb():
    db.create_manall()


@manager.command
def dropdb():
    db.drop_all()


@manager.command
def resetdb():
    db.drop_all()
    db.create_all()

'''


if __name__ == "__main__":
    #manager.run()
    cli()
