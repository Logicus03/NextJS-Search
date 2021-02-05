import React, { useState } from "react";
import styles from "./header.module.scss";

export const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      {children || <p className={styles.logo}> Hola </p>}
    </div>
  );
};
