
import React from 'react';
import styles from './MobileResultIce.module.scss';

const MobileResultIce = (
) => {
  return (<div className={styles.mobileResultIce}><div className={styles.shareSection}><p className={styles}>친구에게 나의 결과를 공유하고<br />
나와의 채팅에 추천 영화를 보관하세요</p><div className={styles.shareButton}><p className={styles.shareTitle}>카카오톡 공유하기</p></div><div className={styles.reTest}><p className={styles.reTestText}>테스트 다시하기</p></div></div></div>);
};

export default MobileResultIce;