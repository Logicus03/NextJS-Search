import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();

    console.log("You hit search", input);
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <form className="search">
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
