from database.db import db
from .characters_mbti import CharactersMbti

class CharactersMainInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    character_image_path = db.Column(db.TEXT, nullable=False)
    head_comment = db.Column(db.String(255), nullable=False)
    scripts = db.Column(db.TEXT, nullable=False)
    description = db.Column(db.TEXT, nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey('characters_mbti.id', ondelete='CASCADE'))

    def __init__(self, character_image_path, head_comment, scripts, description, character_id):
        self.character_image_path = character_image_path
        self.head_comment = head_comment
        self.scripts = scripts
        self.description = description
        self.character_id = character_id
