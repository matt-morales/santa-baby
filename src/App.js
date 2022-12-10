import snowflake from "./assets/snowflake.svg";
import stamp from "./assets/stamp.svg";
import stockings from "./assets/stockings.svg";
import "./App.css";
import { useState } from "react";

const pairs = [
  ["Fara Richter", "Saranne Richter"],
  ["Stefan Richter", "Fara Chorfi"],
  ["Victoria Richter", "Pauline Frank"],
  ["Issam Richter", "Benjamin Richter"],
  ["Saranne Richter", "Matthew Morales"],
  ["Matthew Morales", "Issam Richter"],
  ["Pauline Frank", "Victoria Richter"],
  ["Banjamin Richter", "Stefan Richter"],
];

function App() {
  const [giftee, setGiftee] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== "DEFAULT") {
      setGiftee(pairs[value][1]);
    }
  };

  return (
    <div className="App">
      <img src={stockings} className="Stockings" alt="stockings" />
      <img src={stamp} className="Stamp" alt="stamp" />
      <header className="Title">
        <h2>Letters</h2>
        <h1>SANTA</h1>
      </header>
      <div className="Body">
        <text>Select Donor Name</text>
        <select
          className="Doner"
          onChange={handleChange}
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>
            {" "}
            -- Select a Santa --{" "}
          </option>
          {pairs.map((pair, i) => (
            <option key={i} value={i}>
              {pair[0]}
            </option>
          ))}
        </select>
        <text>Donee Name</text>
        <p className="Donee">{giftee}</p>
      </div>
      <footer className="Footer">
        <h3>NORTH POLE</h3>
        <img
          src={snowflake}
          className="Snowflake"
          alt="snowflake-right"
          style={{ right: "34px" }}
        />
        <img
          src={snowflake}
          className="Snowflake"
          alt="snowflake-left"
          style={{ left: "34px" }}
        />
      </footer>
    </div>
  );
}

export default App;
