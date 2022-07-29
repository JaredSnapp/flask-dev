from flask import Flask, Blueprint, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from random import randint

from .models import Recruiter
from app import db

base = Blueprint('base', __name__, url_prefix='/', template_folder='templates')

@base.route('/')
def home():
    return render_template('home.html')

@base.route('/old/')
def testdb():

    try:
        recruiters = Recruiter.query.all()
        print(recruiters)
        return render_template('home.html', recruiters=recruiters)

    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text


@base.route("/old/addRecruiter", methods=['POST', 'GET'])
def addRecruiter():
    if request.method == 'POST':

        print("POST method")
        name = request.form.get('name')
        phone = request.form.get('phone')
        print(name, phone)
        id = randint(4, 1000)
        print(id)
        newRecruiter = Recruiter(id=id ,name=name, phone=phone)
        db.session.add(newRecruiter)
        db.session.commit()

        return redirect('/old/')
    else:
        print("get method")

    return render_template('addRecruiter.html')


