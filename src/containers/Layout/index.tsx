import React, { ReactElement } from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./layout.module.scss";
import home from "@styles/Home.module.scss";

const Layout = ({ className, children, header = null, footer = null }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <header className={styles.header}>
        {header && <Header>{header}</Header>}
      </header>

      <main className={` ${styles.content}`}>
        <div style={{ overflow: "scroll", overflowX: "hidden" }}>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>{footer && <Footer />}</footer>
    </div>
  );
};

export default Layout;
