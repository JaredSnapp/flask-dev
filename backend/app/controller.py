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
        #recruiters = Recruiter.query.all()
        return render_template('index.html')
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text


'''
@base.route('/')
def testdb():
    try:
        recruiters = Recruiter.query.all()
        return render_template('index.html', recruiters=recruiters)
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text
'''

@base.route("/add-recruiter", methods=['GET', 'POST'])
def add_recruiter():
    form = RecruiterForm()

    if form.validate_on_submit():

        newRecruiter = Recruiter(
            first_name=form.first_name.data, 
            last_name=form.last_name.data, 
            phone=form.phone.data
        )

        # Try this newRecruiter = Recruiter(**form)

        db.session.add(newRecruiter)
        db.session.commit()
        return redirect('/')
        # return redirect(render_template('home'))

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

# refactor endpoint to be specific the the method
@base.route("/api/recruiterJobs/<int:id>", methods=['GET'])
def getRecruiterJobs(id): 
    try:
        jobs = Job.query.filter_by(recruiter_id=id)
        result = [job.serialize() for job in jobs]
        return json.dumps(result)
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text


@base.route("/api/recruiterJobs/<int:id>", methods=['POST'])
def postRecruiterJobs(id): 
    try:
        print(f"Adding job to recruiter id: {id}")
        data = request.data
        data = json.loads(data.decode('utf-8'))
        jobId = addJob(data)
        data['id'] = jobId
        print(f"done adding new job (id: {jobId}) to database")
        return data
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed+error_text

@base.route("/api/recruiterJobs/<int:id>", methods=['PUT'])
def putRecruiterJobs(id): 
    try:
        print("Put request")
        data = request.data
        data = json.loads(request.data.decode('utf-8'))
        job = Job.query.filter_by(id=id).first()
        job.name = data['name']
        job.salary_low = data['salary_low']
        job.salary_high = data['salary_high']
        db.session.commit()
        return request.data
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed+error_text

@base.route("/api/recruiterJobs/<int:id>", methods=['DELETE'])
def deleteRecruiterJobs(id): 
    try:
        print(f"delete {id} requested. Functionality not available yet.")
        # get company id
        # delete job
        res = Job.query.filter_by(id=id).delete()
        db.session.commit()
        print(f"deleted job {id}")
        # TODO: check if company id is used elsewhere in job table
        # if not, delete company id
        companyUsed = Job.query.filter_by(company_id=data['company']).one_or_none()
        if companyUsed is None:
            #delete company
            pass
        return request.data
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed+error_text

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
    

