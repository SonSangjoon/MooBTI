import React from "react";
import styles from "./MobileTopResultNobackground.module.scss";

const MobileTopResultNobackground = () => {
  return (
    <div className={styles.mobileTopResultNobackground}>
      <div className={styles.sceneSection}>
        <div className={styles.scene} />
        <div className={styles.playbutton1}>
          <div className={styles.frame4}>
            <img
              alt=""
              src="https://static.overlay-tech.com/assets/1fd61ae1-6ef9-4b33-bb60-2f3634a2e9c2.png"
            />
          </div>
          <p className={styles.ottName}>Watcha</p>
        </div>
      </div>
      <div className={styles.frame15}>
        <div className={styles.frame57}>
          <div className={styles.mbtiBackground}>
            <p className={styles.mbti}>ESFP</p>
          </div>
          <div className={styles.frame54}>
            <p className={styles.title1}>
              당신은 항상 사랑을 말하는
            </p>
            <p className={styles.title2}>
              포레스트 검프의 제니
            </p>
          </div>
        </div>
        <p className={styles.quotes}>
          &#34;잘 들어, 나한테 하나만 약속해 줘.네가 위험할
          때는 용감한 척 말고, 그냥 달려. 그냥 달아나
          버려.&#34;
        </p>
        <p className={styles.text}>
          외향적이고 감성적인 ESFP 유형의 사람들은
          낙천적이고 관계 맺기를 좋아해요. 그래서 연애할 때
          상대방에게 사랑을 시도 때도 없이 표현하곤 하죠 😘
          <strong className={styles.textEmphasis1}>
            
          </strong>
          종종 연인에게 자신의 가치관을 이야기해요. 상대방이
          자신을 그대로 인정해준다면 온화해지지만, 관계가
          조금이라도 불편해진다면 빠르게 거리를 둔답니다.
          거부당하는 걸 두려워하는 당신에게, 해주고 싶은
          말이 있어요. &#34;사랑하는 사람에게 기꺼이 상처
          받을 것&#34;이라는 말이에요.
        </p>
        <div className={styles.loveTips}>
          <p className={styles.lookupButtonText}>
            🔦 연애 비결 훔쳐보기
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileTopResultNobackground;