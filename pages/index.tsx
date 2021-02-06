import React, { useState, useEffect } from "react";

import styles from "@styles/Home.module.scss";
import Layout from "@containers/Layout";
import Search from "@components/Search";

import useKeyPress from "@hooks/useKeyPress";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState({ name: "" });
  const [error, setError] = useState(false); // used to indicate user which fields are required and empty

  const searchRestaurants = () => {
    if (!location.name || !search) {
      // TODO: Trigger a "No Papu, You cannot"
      console.log("Nope");
      return;
    }

    router.push({
      pathname: "/result",
      query: {
        search,
        location: location?.name,
      },
    });
  };

  useKeyPress("Enter", searchRestaurants);
  useEffect(searchRestaurants, [search, location]);

  return (
    <Layout className={`${styles.background} ${styles.search__background}`}>
      <Search
        onSearch={({ search, location }) => {
          setLocation(location);
          setSearch(search);
        }}
      />
    </Layout>
  );
}
