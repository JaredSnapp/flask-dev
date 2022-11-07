# flask-dev


## Install requirements:
- `pip install -r requirements.txt`
- `pip freeze > requirements.txt`

## Python virtual env:
- Create virtual env: `python3.6 -m venv .`
- Activate virtual env: `source bin/activate`
- Deactivate: `deactivate`


## Run flask app:
- `flask run`

Development mode: (enter in terminal before running 'flask run')
- `export FLASK_ENV=development`



# tools used:

## Database:
>Initialize database:
>- `flask db init`

> update database:
>- `flask db migrate -m 'Migration message'`
>- `flask db upgrade`

> Error: Target database is not up to date.
>- `flask db stamp head`
>- then migrate and upgrade



# Database Design:
## Tables:
Users:
>- id
>- username
>- first name
>- last name

Recruiters:
>- id
>- first name
>- last name
>- active
>- inactive date
>- user id

Company:
>- id
>- company name
>- Summary

Job: 
>- id
>- position
>- salary range
>- interest
>- active
>- company id
>- recruiter id


## Mapping Tables
> Not currently neccessary











