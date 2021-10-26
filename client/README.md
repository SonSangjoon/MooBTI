# MBTIFLEX React

## Description

- 연애 유형 MBTI 검사 제공
- 영화 캐릭터 분석 데이터 제공
- 추천 영화 콘텐츠 제공

## Project Status

This project is currently in development.

## Installation

Installation:

# 도커 이미지 생성

$ docker build -t nginx-react:01 .

# 도커 이미지 목록 확인

$ docker images

# 도커 컨테이너 실행

$ docker run -d --name mbit-app -p 8300:80 nginx-react:01

# 도커 컨테이너 목록 확인

$ docker ps -a
