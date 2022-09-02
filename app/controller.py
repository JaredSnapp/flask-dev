from flask import Flask, Blueprint, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from random import randint

from .models import Recruiter
from .forms import RecruiterForm
from app import db

base = Blueprint('base', __name__, url_prefix='/', template_folder='templates')


@base.route('/')
def testdb():
    try:
        recruiters = Recruiter.query.all()
        return render_template('home.html', recruiters=recruiters)
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text


@base.route("/addRecruiter", methods=['GET', 'POST'])
def addRecruiter():
    form = RecruiterForm()

    if form.validate_on_submit():
        id = getRandID(db, Recruiter) 
        newRecruiter = Recruiter(first_name=form.first_name.data, last_name=form.last_name.data, phone=form.phone.data)
        db.session.add(newRecruiter)
        db.session.commit()
        return redirect('/')

    return render_template('addRecruiter.html', form=form)


def getRandID(db, model):
    for i in range(0,5):
        randID = randint(1, 1000000)
        exists = db.session.query(model.query.filter(model.id == randID).exists()).scalar()
        if not exists:
            return randID
    raise Exception(f"Available ID not found in {model.__name__} table")
    

