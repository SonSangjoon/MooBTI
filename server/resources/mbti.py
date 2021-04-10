from flask import jsonify, request
from flask_restful import reqparse, abort, Api, Resource

from database.db import db
from database.models.users import Users
from database.models.characters_mbti import CharactersMbti
from database.models.characters_main_info import CharactersMainInfo
from database.models.characters_sub_info import CharactersSubInfo
from database.models.movies import Movies


from resources.answer_to_mbti import answer_to_mbti

parser = reqparse.RequestParser()
parser.add_argument("gender")
parser.add_argument("answer")


class Mbti(Resource):
    def get(self, gender, user_mbti):
        pass

    def post(self):
        args = parser.parse_args()
        # error = None

        user_mbti = answer_to_mbti(args["answer"])

        users = Users(args["gender"], user_mbti)
        db.session.add(users)
        db.session.commit()

        return jsonify(status="success", user_mbti=user_mbti)
