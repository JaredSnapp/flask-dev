
class Recruiter(db.Model):
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


class Company(db.Model):
    id = Column(Integer, primary_key=True, autoincrement=True) 
    name = Column(String(80), unique=True, nullable=False)
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())

class Job(db.Model):
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

    def serialize(self):
        dic = {
            "id": self.id,
            "name": self.name,
            "salary_low": self.salary_low,
            "salary_high": self.salary_high,
            "company": self.company.name,
            "company_id": self.company_id,
            "inactive_date": "",
            "created": self.created.strftime("%m/%d/%Y"),
            "last_modified": ""
        }
        if self.last_modified:
            dic["last_modified"] = self.last_modified.strftime("%m/%d/%Y")

{
    
}





class Note(db.Model):

    __tablename__ = 'note'

    id = Column(Integer, primary_key=True, autoincrement=True)
    #parent_id = Column(ForeignKey(80), nullable=False)
    body = Column(Text)
    created = Column(DateTime(timezone=True), server_default=func.now())
    last_modified = Column(DateTime(timezone=True), onupdate=func.now())
