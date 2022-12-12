from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import func, Column, String, Date, DateTime, ForeignKey, Integer, Text, Boolean
from app import db


class Recruiter(db.Model):

    __tablename__ = 'recruiter'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    phone = Column(String(20), unique=True)
    active = Column(Boolean, default=True)
    inactive_date = Column(DateTime)
    last_contact = Column(DateTime)
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())

    def serialize(self):
        dic = {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "active": self.active,
            "inactive_date": "",
            "last_contact": self.last_contact,
            "created": self.created.strftime("%m/%d/%Y"),
            "last_modified": ""
        }
        if self.last_modified:
            dic["last_modified"] = self.last_modified.strftime("%m/%d/%Y")
        if self.inactive_date:
            dic["inactive_date"] = self.inactive_date.strftime("%m/%d/%Y")

        return dic
    
    def getId(self):
        return self.id

    @property
    def name(self):
        return f"{self.first_name} {self.last_name}"


class Company(db.Model):

    __tablename__ = 'company'

    id = Column(Integer, primary_key=True, autoincrement=True) 
    name = Column(String(80), unique=True, nullable=False)
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())

    def __init__(self, name):
        self.name = name

class Job(db.Model):

    __tablename__ = 'job'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(80), nullable=False)
    salary_low = Column(Integer())
    salary_high = Column(Integer())
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())

    company_id = Column(ForeignKey(Company.id), nullable=False)
    company = relationship('Company', backref='job')

    recruiter_id = Column(Integer, ForeignKey(Recruiter.id), nullable=False)
    
    def __init__(self, name, salary_low, salary_high, company_id, recruiter_id):
        self.name = name
        self.salary_low = salary_low
        self.salary_high = salary_high
        self.company_id = company_id
        self.recruiter_id = recruiter_id


    @property
    def salary_range(self):
        return f"{self.salary_low} {self.salary_high}"

    def serialize(self):
        dic = {
            "name": self.name,
            "salary_low": self.salary_low,
            "salary_high": self.salary_high,
            #"company": self.company,
            "company_id": self.company_id,
            "inactive_date": "",
            "created": self.created.strftime("%m/%d/%Y"),
            "last_modified": ""
        }
        if self.last_modified:
            dic["last_modified"] = self.last_modified.strftime("%m/%d/%Y")

        return dic





class Note(db.Model):

    __tablename__ = 'note'

    id = Column(Integer, primary_key=True, autoincrement=True)
    #parent_id = Column(ForeignKey(80), nullable=False)
    body = Column(Text)
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())
