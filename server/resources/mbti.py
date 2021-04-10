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
    def get(self, user_mbti, gender):
        if gender == 'male': opposite_gender = 'female'
        else: opposite_gender = 'male'

        character = db.session.query(CharactersMbti).filter(db.and_(CharactersMbti.character_mbti == user_mbti, CharactersMbti.character_gender == gender)).one()
        movie = db.session.query(Movies).filter(Movies.character_id == character.id).one()
        main_info = db.session.query(CharactersMainInfo).filter(CharactersMainInfo.character_id == character.id).one()

        good_mbti = db.session.query(CharactersMbti).filter(db.and_(CharactersMbti.character_mbti == character.good_mbti, CharactersMbti.character_gender == opposite_gender)).one()
        good_sub_info = db.session.query(CharactersSubInfo).filter(CharactersSubInfo.character_id == good_mbti.id).one()
        good_movie = db.session.query(Movies).filter(Movies.character_id == good_mbti.id).one()

        if character.bad_mbti:
            bad_mbti = db.session.query(CharactersMbti).filter(db.and_(CharactersMbti.character_mbti == character.bad_mbti, CharactersMbti.character_gender == opposite_gender)).one()
            bad_sub_info = db.session.query(CharactersSubInfo).filter(CharactersSubInfo.character_id == bad_mbti.id).one()
            bad_movie = db.session.query(Movies).filter(Movies.character_id == bad_mbti.id).one()


        result={'character_path':main_info.character_image_path, 'head_comment':main_info.head_comment, 'scripts':main_info.scripts, 'description':main_info.description}
        good_related={'character_path':good_sub_info.character_image_path, 'recommendation':good_sub_info.recommendation, 'movie_link':good_movie.movie_link}
        bad_related={'character_path':bad_sub_info.character_image_path, 'recommendation':bad_sub_info.recommendation, 'movie_link':bad_movie.movie_link}

        return jsonify(status="success", result=result, good_related=good_related, bad_related=bad_related)

    def post(self):
        args = parser.parse_args()
        # error = None

        user_mbti = answer_to_mbti(args["answer"])

        users = Users(args["gender"], user_mbti)
        db.session.add(users)
        db.session.commit()

        return jsonify(status="success", user_mbti=user_mbti)
