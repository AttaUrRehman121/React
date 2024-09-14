import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <header className="header">
        <img src={reactLogo} alt="React Logo" />
        <img src={viteLogo} alt="Vite Logo" />
        <h1>Cosmetic Store </h1>
      </header>
      <section>
        <nav className="nav">
          {results.map((d) => (
            <div key={d.id}>
              <h1>{d.name}</h1>
            </div>
          ))}
        </nav>
      </section>
      <article className="artical">main note</article>
      <footer className="footer">
        <p>
          Made with <span>❤️</span> <by>" "</by>
        </p>
      </footer>
    </>
  );
}

export default App;
