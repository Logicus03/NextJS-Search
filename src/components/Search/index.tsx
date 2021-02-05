import { useState, useEffect } from "react";
import styles from "./search.module.scss";

const Search = ({ search: term = "", onSearch = console.log }) => {
  const [input, setInput] = useState(term);

  useEffect(() => {
    search(input);
  }, [input]);

  const search = (term: string) => {
    onSearch(term);
  };

  return (
    <form className={styles.search}>
      <div className={styles.search__input}>
        <input
          placeholder="What are you looking for?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
