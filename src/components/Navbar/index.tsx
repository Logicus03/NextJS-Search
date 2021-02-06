import React, { useState, useRef } from "react";
import styles from "./navbar.module.scss";
import SearchBar from "@components/Search";

const Navbar: React.FunctionComponent = () => {
  const [openMobileSearch, setOpenMobileSearch] = useState(false);
  const mobileSearchbarRef = useRef<HTMLDivElement>(null);

  return (
    <nav className={styles.container}>
      <h3> Search </h3>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
