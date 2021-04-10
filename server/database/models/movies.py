from database.db import db
from .characters_mbti import CharactersMbti

class Movies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    movie_title = db.Column(db.String(100), nullable=False)
    movie_link = db.Column(db.TEXT, nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey('characters_mbti.id'))

    def __init__(self, movie_title, movie_link, character_id):
        self.movie_title = movie_title
        self.movie_link = movie_link
        self.character_id = character_id
