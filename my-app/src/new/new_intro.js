import React from "react";
import "./new_intro.scss";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";

export function NewIntro() {
  return (
    <div>
      <Mobile>
        <div className="iPhone11ProX13">
          <div className="backgroundImg" />
            <div className="mobile1Content">
              <div className="mbframe18">
                <p className="mbtitle1">내가 로맨스 영화 주인공이라면?</p>
                <p className="mbtitle2">로맨스 영화 속 나의 부캐와 궁합을 찾고<br />
            연애를 코칭해 줄 영화를 받아보세요!</p>
            </div>
            <div className="mbstartButton">
              <button className="button">
                START
              </button>
              </div>
              </div>
        </div>
      </Mobile>
      <PC>
        <div className="desktop1Full">
          <div className="contentWithImg">
            <div className="desktop1ContentWithImg">
              <div className="frame19">
                <div className="frame18">
                  <p className="title1">내가 로맨스 영화 주인공이라면?</p>
                  <p className="title2">
                    로맨스 영화 속 나의 부캐와 궁합을 찾고
                    <br />
                    연애를 코칭해 줄 영화를 받아보세요!
                  </p>
                </div>
                <div className="startButton">
                <button className="button">
                START
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PC>
      <Tablet>
      <div className="desktop1Full">
          <div className="contentWithImg">
            <div className="desktop1ContentWithImg">
              <div className="frame19">
                <div className="frame18">
                  <p className="title1">내가 로맨스 영화 주인공이라면?</p>
                  <p className="title2">
                    로맨스 영화 속 나의 부캐와 궁합을 찾고
                    <br />
                    연애를 코칭해 줄 영화를 받아보세요!
                  </p>
                </div>
                <div className="startButton">
              <button className="button">
                START
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tablet>
      <PCwide>
      <div className="desktop1Full">
          <div className="contentWithImg">
            <div className="desktop1ContentWithImg">
              <div className="frame19">
                <div className="frame18">
                  <p className="title1">내가 로맨스 영화 주인공이라면?</p>
                  <p className="title2">
                    로맨스 영화 속 나의 부캐와 궁합을 찾고
                    <br />
                    연애를 코칭해 줄 영화를 받아보세요!
                  </p>
                </div>
                <div className="startButton">
                  <div className="button" />
                  <p className="startButtonText">START</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PCwide>
    </div>
  );
}
