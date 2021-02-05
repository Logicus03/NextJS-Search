import { useState, useEffect } from "react";
import "./search.module.scss";

const Search = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    search(input);
  }, [input]);

  const search = (term: string) => {
    // e.preventDefault();
    // setInput(e.target.value);
    console.log(term);
  };

  return (
    <form className="search">
      <input
        placeholder="What are you looking for?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
