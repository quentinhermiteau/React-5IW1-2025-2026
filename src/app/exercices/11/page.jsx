"use client";

import { useReducer } from "react";
import Slider from "./Slider";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, { action, value }) => {
  switch (action) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { ...state, count: 0 };
    case "setStep":
      return { ...state, step: value };
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ action: "increment" });
  const handleDecrement = () => dispatch({ action: "decrement" });
  const handleReset = () => dispatch({ action: "reset" });
  const handleUpdateStep = (step) =>
    dispatch({ action: "setStep", value: step });

  console.log(state);

  return (
    <main>
      <div id="notice">
        À l'aide de useReducer et setInterval, faire en sorte que le compteur
        s'incrémente automatiquement toutes les secondes.
      </div>
      <h1>{state.count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
      <Slider min={1} max={10} onChange={handleUpdateStep} />
    </main>
  );
}
