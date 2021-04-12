from database.db import db
from .mbti_types import MbtiTypes
from .movies import Movies


class CharactersMbti(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character_gender = db.Column(db.String(6), nullable=False)
    character_mbti = db.Column(db.String(4), db.ForeignKey("mbti_types.mbti_type"))
    character_name = db.Column(db.String(30), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey("movies.id"))

    def __init__(self, character_gender, character_mbti, character_name, movie_id):
        self.character_gender = character_gender
        self.character_mbti = character_mbti
        self.character_name = character_name
        self.movie_id = movie_id
