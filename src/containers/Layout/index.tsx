import React, { ReactElement } from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import Card from "@components/Card";
import "./layout.module.scss";
import styles from "@styles/Home.module.scss";

const Layout = ({ className, children, header = null, footer = null }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {header && <Header>{header}</Header>}

      <main className="main">{children}</main>

      {footer && <Footer />}
    </div>
  );
};

export default Layout;
