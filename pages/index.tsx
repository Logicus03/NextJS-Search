import React, { useState } from "react";

import styles from "@styles/Home.module.scss";
import Layout from "@containers/Layout";
import Search from "@components/Search";

import useKeyPress from "@hooks/useKeyPress";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false); // used to indicate user which fields are required and empty

  useKeyPress("Enter", () => {
    router.push({
      pathname: "/result",
      query: {
        search,
        location: { ...location },
      },
    });
  });

  return (
    <Layout className={` ${styles.search__background} ${styles.container}`}>
      <Search onSearch={setSearch} />
    </Layout>
  );
}
