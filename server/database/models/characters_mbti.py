from database.db import db


class CharactersMbti(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character_gender = db.Column(db.String(6), nullable=False)
    character_mbti = db.Column(db.String(4), nullable=False)
    character_name = db.Column(db.String(30), nullable=False)
    good_mbti = db.Column(db.String(4), nullable=False)
    bad_mbti = db.Column(db.String(4))

    def __init__(self, character_gender, character_mbti, character_name, good_mbti, bad_mbti):
        self.character_gender = character_gender
        self.character_mbti = character_mbti
        self.character_name = character_name
        self.good_mbti = good_mbti
        self.bad_mbti = bad_mbti