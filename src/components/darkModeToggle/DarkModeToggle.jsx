"use client";

import { useContext } from "react";
import styles from "./darkmodetoggle.module.css";
import { ThemeContext } from "../../app/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }} //If mode is light, left should be 2px. If it is dark, left should be 2px
      />
    </div>
  );
};
export default DarkModeToggle;
