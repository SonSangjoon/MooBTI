# -*- coding: utf-8 -*-
import config

from flask import Flask, jsonify, request, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import reqparse, abort, Api, Resource

from database.db import db
from database.models.users import Users

migrate = Migrate()

app = Flask(__name__)
api = Api(app)
CORS(app)
app.config.from_mapping(SECRET_KEY="dev")
app.config.from_object(config)

db.init_app(app)
db.create_all(app=app)
migrate.init_app(app, db)


parser = reqparse.RequestParser()
parser.add_argument("gender")
parser.add_argument("answer")

class Mbti(Resource):
    def get(self):
        pass

    def post(self):
        args = parser.parse_args()
        # error = None

        users = Users(args['gender'], args['answer'])
        db.session.add(users)
        db.session.commit()

        pass

api.add_resource(Mbti, "/mbti")

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)