# import datetime
from database.db import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(30), nullable=False)
    answer = db.Column(db.String(30), nullable=False)
    # ans_date = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def __init__(self, gender, answer):
        self.gender = gender
        self.answer = answer