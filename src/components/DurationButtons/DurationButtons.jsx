import React from "react";
import styles from "./DurationButtons.module.css";

const names = ["1D", "7D", "1M", "6M"];
const colors = [
  "rgb(255, 192, 203)",
  "rgb(6, 192, 238)",
  "rgb(43, 228, 172)",
  "rgb(255, 169, 9)",
];
export default function DurationButtons() {
  return (
    <div className={styles.buttons}>
      {names.map((item, i) => (
        <button key={i} style={{ backgroundColor: `${colors[i]}` }}>
          {item}
        </button>
      ))}
    </div>
  );
}
