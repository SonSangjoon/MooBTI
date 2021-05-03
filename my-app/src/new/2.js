import React from "react";
import styles from "./MobileResultIce.module.scss";

const MobileResultIce = () => {
  return (
    <div className={styles.mobileResultIce}>
      <div className={styles.contentTwo}>
        <div className={styles.content}>
          <div className={styles.frame50}>
            <p className={styles.title1}>
              나와 ❄️ 얼음 케미인 남주는
            </p>
            <p className={styles.title2}>
              INFP 프렌즈 위드 베네핏의 딜런
            </p>
          </div>
          <img
            alt=""
            className={styles.profileImg}
            src="https://static.overlay-tech.com/assets/870c684c-87e9-4572-a454-ba38389e1e2f.png"
          />
          <p className={styles.text}>
            낭만적 사랑을 찾아다니는 INFP 남자.내면에서
            혼자 고민을 많이 하지만당신에게 환상을 갖고 푹
            빠져버릴 거예요.
          </p>
        </div>
        <div className={styles.playButton}>
          <img
            alt=""
            className={styles.playButtonImg}
            src="https://static.overlay-tech.com/assets/dc3604c3-0afb-48e2-85a2-49eb66f51b39.svg"
          />
          <p className={styles.ottName}>Watcha</p>
        </div>
      </div>
    </div>
  );
};

export default MobileResultIce;