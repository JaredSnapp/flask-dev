from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SelectField, IntegerField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length

class RecruiterForm(FlaskForm):
    first_name = StringField(
        'First Name',
        render_kw={"placeholder": "First Name"},
        validators=[DataRequired(), Length(2, 20)]
    )

    last_name = StringField(
        'Last Name',
        render_kw={"placeholder": "Last Name"},
        validators=[DataRequired(), Length(2, 20)]
    )

    phone = IntegerField(
        'Phone',
        render_kw={"placeholder": "Phone"},
        validators=[]
    )

    submit = SubmitField()