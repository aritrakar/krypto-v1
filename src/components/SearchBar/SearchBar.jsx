import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={styles.search}>
      <form>
        <input
          onChange={(e) => props.handleChange(e.target.value)}
          type="text"
          id="input"
          placeholder="Some cryptocurrency"
        ></input>
        <button onClick={() => props.getSpecificRequest()} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
