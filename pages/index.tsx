import React, { useState, useEffect } from "react";

import styles from "@styles/Home.module.scss";
import Layout from "@containers/Layout";
import Search from "@components/Search";

import useKeyPress from "@hooks/useKeyPress";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import { searchRestaurants, setSearch } from "@store/actions/restaurant.action";

function Home({ setSearch, data }) {
  const router = useRouter();

  const [term, setTerm] = useState(data.term);
  const [location, setLocation] = useState(data.location);

  const handleSearch = ({ search, location }) => {
    setTerm(search);
    setLocation(location);

    // update Store
    setSearch(search, location);
    searchRestaurants();
    // searchRestaurants();
  };

  const searchRestaurants = () => {
    if (term && location?.name)
      router.push({
        pathname: "/result",
        // query: {
        //   term: term,
        //   location: location.name,
        // },
      });
  };

  useKeyPress("Enter", searchRestaurants);
  useEffect(searchRestaurants, [term, location]);

  return (
    <Layout className={`${styles.background} ${styles.search__background}`}>
      <Search
        search={data.term}
        location={data.location.name}
        onSearch={handleSearch}
      />
    </Layout>
  );
}

const mapStateToProps = (state: any) => ({
  data: state.search,
});

export default connect(mapStateToProps, {
  searchRestaurants,
  setSearch,
})(Home);
