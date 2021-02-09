import Location from "@components/Location";
import { useState, useEffect } from "react";
import styles from "./search.module.scss";

const Search = ({
  search: term = "",
  location: _location = { name: "Santo Domingo" },
  onSearch = console.log,
}) => {
  const [searchTerm, setSearchTerm] = useState(term);
  const [location, setLocation] = useState(_location);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e);
    // fetchBusinessDetails();

    onSearch({ search: searchTerm, location });
  };

  return (
    <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.container__input}
        required
        type="text"
        placeholder="What are you looking for? Bar, restaurant,..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Location
        required
        className={styles.container__input}
        placeholder="Where? City, country, ..."
        value={location.name}
        onChange={(e) => setLocation(e)}
      />

      <button type="submit" className={styles.container__button}>
        {" "}
        Search{" "}
      </button>
    </form>
  );
};

export default Search;
