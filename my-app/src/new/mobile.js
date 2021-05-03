import React from "react";
import {
  MobileTopResultNobackground,
  MobileResultFire,
  MobileResultIce
} from "components";
import styles from "./FullPage.module.scss";

const FullPage = () => {
  return (
    <div className={styles.fullPage}>
      <MobileTopResultNobackground />
      <MobileResultFire />
      <MobileResultIce />
      <MobileResultIce />
    </div>
  );
};

export default FullPage;