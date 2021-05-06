// Overlay use className props to pass style properties to child component.

import React from "react";
import "./new_result.scss";

export function NewResult() {
  return (
    <div className="fullPage">
      <div className="mobileTopResultNobackground">
        <div className="sceneSection">
          <div className="scene" />
          <div className="playbutton1">
            <div className="frame4">
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/1fd61ae1-6ef9-4b33-bb60-2f3634a2e9c2.png"
              />
            </div>
            <p className="ottName">Watcha</p>
          </div>
        </div>
        <div className="frame15">
          <div className="frame57">
            <div className="mbtiBackground">
              <p className="mbti">ESFP</p>
            </div>
            <div className="frame54">
              <p className="title1">당신은 항상 사랑을 말하는</p>
              <p className="title2">포레스트 검프의 제니</p>
            </div>
          </div>
          <p className="quotes">
            &#34;잘 들어, 나한테 하나만 약속해 줘.네가 위험할 때는 용감한 척
            말고, 그냥 달려. 그냥 달아나 버려.&#34;
          </p>
          <p className="text">
            외향적이고 감성적인 ESFP 유형의 사람들은 낙천적이고 관계 맺기를
            좋아해요. 그래서 연애할 때 상대방에게 사랑을 시도 때도 없이 표현하곤
            하죠 😘
            <strong className="textEmphasis1"></strong>
            종종 연인에게 자신의 가치관을 이야기해요. 상대방이 자신을 그대로
            인정해준다면 온화해지지만, 관계가 조금이라도 불편해진다면 빠르게
            거리를 둔답니다. 거부당하는 걸 두려워하는 당신에게, 해주고 싶은 말이
            있어요. &#34;사랑하는 사람에게 기꺼이 상처 받을 것&#34;이라는
            말이에요.
          </p>
          <div className="loveTips">
            <p className="lookupButtonText">🔦 연애 비결 훔쳐보기</p>
          </div>
        </div>
      </div>
      <div className="mobileResultFire">
        <div className="contentTwo">
          <div className="content">
            <div className="frame49">
              <p className="title1">나와 🔥 불꽃 케미 터지는 남주는</p>
              <p className="title2">
                ISFJ
                <strong className="title2Emphasis1"> </strong>
                포레스트 검프의 검프
              </p>
            </div>
            <img
              alt=""
              className="profileImage"
              src="https://static.overlay-tech.com/assets/4b70e91d-2fd1-44c0-837b-a08b3d0c77cc.png"
            />
            <p className="text">
              "영원한 사랑을 찾는 ISFJ 남자.따뜻하고 배려심이 넘치지만
              당신에게서운함이 있어도 마음에 숨겨두고 있어요."
            </p>
          </div>
          <div className="playButton">
            <img
              alt=""
              className="playButtonImg"
              src="https://static.overlay-tech.com/assets/a75b33ee-9a23-47a9-8fe6-314e9255190b.svg"
            />
            <p className="ottName">Watcha</p>
          </div>
        </div>
      </div>

      <div className="mobileResultIce">
        <div className="contentTwo">
          <div className="content">
            <div className="frame50">
              <p className="title1">나와 ❄️ 얼음 케미인 남주는</p>
              <p className="title2">INFP 프렌즈 위드 베네핏의 딜런</p>
            </div>
            <img
              alt=""
              className="profileImg"
              src="https://static.overlay-tech.com/assets/870c684c-87e9-4572-a454-ba38389e1e2f.png"
            />
            <p className="text">
              낭만적 사랑을 찾아다니는 INFP 남자.내면에서 혼자 고민을 많이
              하지만당신에게 환상을 갖고 푹 빠져버릴 거예요.
            </p>
          </div>
          <div className="playButton">
            <img
              alt=""
              className="playButtonImg"
              src="https://static.overlay-tech.com/assets/dc3604c3-0afb-48e2-85a2-49eb66f51b39.svg"
            />
            <p className="ottName">Watcha</p>
          </div>
        </div>
      </div>

      <div className="mobileResultIce">
        <div className="shareSection">
          <p className="sharetext">
            친구에게 나의 결과를 공유하고
            <br />
            나와의 채팅에 추천 영화를 보관하세요
          </p>
          <div className= "shareButton">
            <p className="shareTitle">카카오톡 공유하기</p>
          </div>
          <div className="reTest">
            <p className="reTestText">테스트 다시하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}
