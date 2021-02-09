import React, { useEffect, useState } from "react";

import Layout from "@containers/Layout";
import Search from "@components/Search";
import styles from "./results.module.scss";
import { connect } from "react-redux";

import { searchRestaurants, setSearch } from "@store/actions/restaurant.action";
import Card from "@components/Card";

const Result = ({ searchRestaurants, setSearch, data, ...props }) => {
  console.log(data);
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = ({ search, location }) => {
    setSearch(search, location);
    searchRestaurants();
  };

  const handleInit = () => {
    searchRestaurants();
  };

  useEffect(handleInit, [data.term]);
  useEffect(() => setBusinesses(data?.result?.businesses || []), [
    data.result?.businesses,
  ]);

  return (
    <Layout
      className={`${styles.background} ${styles.container}`}
      header={
        <Search
          search={data.term}
          location={data.location.name || data.location}
          onSearch={handleSearch}
        />
      }
    >
      <div className="container mt-5">
        <div className="row">
          {businesses.map((business) => (
            <Card business={business} key={business.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.search,
});

export default connect(mapStateToProps, {
  searchRestaurants,
  setSearch,
})(Result);
