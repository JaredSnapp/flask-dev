from flask import Flask, Blueprint, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from random import randint
import json

from .models import Recruiter, Job
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
        newRecruiter = Recruiter(first_name=form.first_name.data, last_name=form.last_name.data, phone=form.phone.data)
        db.session.add(newRecruiter)
        db.session.commit()
        return redirect('/')

    return render_template('addRecruiter.html', form=form)



@base.route("/api/recruitersList")
def recruiterInfo():
    try:
        recruiters = Recruiter.query.all()
        result = [recruiter.serialize() for recruiter in recruiters]
        return json.dumps(result)
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text

@base.route("/api/getRecruiter/<int:id>", methods=['GET'])
def getRecruiter(id):
    try:
        recruiters = Recruiter.query.filter_by(id=id)
        result = [recruiter.serialize() for recruiter in recruiters]
        return json.dumps(result)
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text

@base.route("/api/getRecruiterJobs/<int:id>", methods=['GET'])
def getRecruiterJobs(id):
    try:
        jobs = Job.query.filter_by(recruiter_id=id)
        result = [jobs.serialize() for job in jobs]
        return json.dumps(result)
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text