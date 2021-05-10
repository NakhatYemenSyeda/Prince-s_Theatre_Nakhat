import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.heading}>Prince's Theatre</div>
      <div className={styles.subHeading}>Classic Movies At Home</div>
      <div className={styles.subHeadingContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </div>
    </div>
  );
}
