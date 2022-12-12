"""made comp and job foreign ids not unique

Revision ID: 0a47079d35d9
Revises: 75d56e8a6e12
Create Date: 2022-11-08 18:58:52.705723

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0a47079d35d9'
down_revision = '75d56e8a6e12'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('company_id', table_name='job')
    op.drop_index('recruiter_id', table_name='job')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index('recruiter_id', 'job', ['recruiter_id'], unique=False)
    op.create_index('company_id', 'job', ['company_id'], unique=False)
    # ### end Alembic commands ###
