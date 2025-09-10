"use client";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <main>
      <div id="notice">
        Utilise le hook useState pour faire fonctionner ce compteur
      </div>
      <span>{count}</span>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </main>
  );
}
