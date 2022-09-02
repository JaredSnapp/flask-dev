"""empty message

Revision ID: 6369b24987a0
Revises: 
Create Date: 2022-08-25 18:10:20.290395

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6369b24987a0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('note',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body', sa.Text(), nullable=True),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('last_modified', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('recruiter',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.Column('status', sa.String(length=80), nullable=True),
    sa.Column('last_contact', sa.DateTime(), nullable=True),
    sa.Column('phone', sa.String(length=20), nullable=True),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('last_modified', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('first_name'),
    sa.UniqueConstraint('last_name'),
    sa.UniqueConstraint('phone')
    )
    op.create_table('company',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('phone', sa.String(length=20), nullable=False),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('last_modified', sa.DateTime(timezone=True), nullable=True),
    sa.Column('recruiter_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['recruiter_id'], ['recruiter.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('recruiter_id')
    )
    op.create_table('job',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('salary_low', sa.Integer(), nullable=True),
    sa.Column('salary_high', sa.Integer(), nullable=True),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('last_modified', sa.DateTime(timezone=True), nullable=True),
    sa.Column('company_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['company_id'], ['company.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('company_id'),
    sa.UniqueConstraint('name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('job')
    op.drop_table('company')
    op.drop_table('recruiter')
    op.drop_table('note')
    # ### end Alembic commands ###