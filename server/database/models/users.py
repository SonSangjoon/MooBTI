# import datetime
from database.db import db


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(6), nullable=False)
    user_mbti = db.Column(db.String(4), nullable=False)
    # ans_date = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def __init__(self, gender, user_mbti):
        self.gender = gender
        self.user_mbti = user_mbti
