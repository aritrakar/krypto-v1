import React from "react";
import styles from "./DurationButtons.module.css";

const names = ["1D", "7D", "1M", "6M"];
export default function DurationButtons() {
  return (
    <div className={styles.buttons}>
      {names.map((item, i) => (
        <button key={i} className={item}>
          item
        </button>
      ))}
    </div>
  );
}
