from database.db import db
from .characters_mbti import CharactersMbti

class CharactersSubInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character_image_path = db.Column(db.TEXT, nullable=False)
    recommendation = db.Column(db.TEXT, nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey('characters_mbti.id'))

    def __init__(self, character_image_path, recommendation, character_id):
        self.character_image_path = character_image_path
        self.recommendation = recommendation
        self.character_id = character_id