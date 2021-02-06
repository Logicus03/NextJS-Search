import React, { useState } from "react";
import { useRouter } from "next/router";
import GetRestaurants from "@data/getRestaurants";

import Layout from "@containers/Layout";
import Search from "@components/Search";
import styles from "./results.module.scss";

const Result = () => {
  // const router = useRouter();
  const result = GetRestaurants("tacos", "Santo Domingo");
  console.log(result);

  return (
    <Layout
      className={`${styles.background} ${styles.container}`}
      header={<Search onSearch={console.log} />}
    >
      <p>Halo~</p>
    </Layout>
  );
};

export default Result;
