"use client";

import { themeContext } from "@/contexts/ThemeProvider";
import { useContext } from "react";

function Link({ exercice }) {
  return (
    <li style={{ padding: "5px 0" }}>
      <a href={`/exercices/${exercice}`}>Exercice {exercice}</a>
    </li>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useContext(themeContext);

  const themes = [
    {
      name: "Intro",
      exercices: [1, 2, 3],
    },
    {
      name: "useState",
      exercices: [4, 5, 6, 7, 8],
    },
    {
      name: "useContext",
      exercices: [9, 10],
    },
    {
      name: "useReducer",
      exercices: [11, 12, 13],
    },
    {
      name: "Memoïsation",
      exercices: [14, 15],
    },
  ];

  return (
    <div id="navbar">
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value={"light"}>Light</option>
        <option value={"dark"}>Dark</option>
      </select>
      <h1>Exercices</h1>
      <ul>
        {themes.map(({ name, exercices }) => (
          <div key={name}>
            <h2>{name}</h2>
            {exercices.map((exercice) => (
              <Link key={exercice} exercice={exercice} />
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}
