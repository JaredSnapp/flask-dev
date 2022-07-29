from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import func, Column, String, Date, DateTime, ForeignKey, Integer
from app import db


class Recruiter(db.Model):

    __tablename__ = 'recruiter'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    

    def __repr__(self):
        return '<User %r>' % self.name


'''

class Company(db.Model):

    __tablename__ = 'company'

    id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    phone = Column(String(20), unique=True, nullable=False)
    recruiter_id = Column(ForeignKey, unique=True, nullable=False)
    recruiter = relationship('Recruiter', backref='company')
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())
   

class Job(db.Model):

    __tablename__ = 'job'

    id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    salary_low = Column(Integer())
    salary_high = Column(Integer())
    company_id = Column(ForeignKey, unique=True, nullable=False)
    company = relationship('Company', backref='job')
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())

    @property
    def salary_range(self):
        return f"{self.salary_low} {self.salary_high}"


# class Recruiter(db.Model):

#     __tablename__ = 'old_recruiter'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     phone = db.Column(db.String(20), unique=True, nullable=False)
    

#     def __repr__(self):
#         return '<User %r>' % self.name


class Recruiter(db.Model):

    __tablename__ = 'recruiter'

    id = Column(Integer, primary_key=True)
    recruiterName = Column(String(80), unique=True, nullable=False)
    first_name = Column(String(80), unique=True, nullable=False)
    last_name = Column(String(80), unique=True, nullable=False)
    status = Column(String(80))
    last_contact = Column(DateTime)
    phone = Columnn(String(20), unique=True, nullable=False)
    companies = relationship('Company', backref='recruiter')
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())

    @property
    def name(self):
        return f"{self.first_name} {self.last_name}"


class Note(db.Model):

    __tablename__ = 'note'

    id = Column(Integer, primary_key=True)
    parent_id = Column(ForeignKey(80), nullable=False)
    body = Column(Text)
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())

'''