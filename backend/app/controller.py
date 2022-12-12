from flask import Flask, Blueprint, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from flask_cors import CORS, cross_origin
from random import randint
import json

from .models import Recruiter, Job, Company
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

@base.route("/api/getRecruiterJobs/<int:id>", methods=['GET', 'POST', 'DELETE'])
def getRecruiterJobs(id): 
    if request.method == 'POST':
        print(f"Adding job to recruiter id: {id}")
        data = request.data
        data = json.loads(data.decode('utf-8'))
        jobId = addJob(data)
        print(f"done adding new job (id: {jobId}) to database")
        return request.data
    elif request.method == 'DELETE':
        print(f"delete {id} requested. Functionality not available yet.")
        # get company id
        # delete job
        #res = Jobs.delete.filter(id=id)
        # check if company id is used elsewhere in job table
        # if not, delete company id
    else: 
        try:
            jobs = Job.query.filter_by(recruiter_id=id)
            result = [job.serialize() for job in jobs]
            return json.dumps(result)
        except Exception as e:
            error_text = "<p>The error:<br>" + str(e) + "</p>"
            hed = '<h1>Something is broken.</h1>'
            return hed + error_text


def addJob(data):
    # check if company name exists
    company = Company.query.filter_by(name=data['company']).one_or_none()
    if company is None:
        newComp = Company(data['company'])
        db.session.add(newComp)
        db.session.commit()
        company = Company.query.filter_by(name=data['company'])
        comp_id = newComp.id
    else:
        comp_id = company.id

    newJob = Job(data['name'], data['salary_low'], data['salary_high'], comp_id, int(data['recruiter_id']))
    db.session.add(newJob)
    db.session.commit()

    return newJob.id
    

