import React from "react";
import styles from "./style.module.css";

const TimingSell = () => {
  return (
    <>
      <div className={styles.timing_sell}>
        <div className={styles.ts_title}>Until the end of the sale:</div>
        <div className={styles.ts_time}>
          <span className={styles.tst_num}>47</span>
          <span className={styles.tst_day}>days</span>
          <span className={styles.tst_num}>06</span>
          <span className={styles.tst_day}>hours</span>
          <span className={styles.tst_num}>59</span>
          <span className={styles.tst_day}>minutes</span>
          <span className={styles.tst_num}>59</span>
          <span className={styles.tst_day}>sec.</span>
        </div>
      </div>
    </>
  );
};
export default TimingSell;
