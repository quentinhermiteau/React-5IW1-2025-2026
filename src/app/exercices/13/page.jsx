"use client";

import { useReducer } from "react";

const initialState = {
  past: [],
  count: 0,
  future: [],
};

function reducer(state, { type }) {
  let { past, count, future } = state;

  switch (type) {
    case "increment":
      past = [...past, count];
      count += 1;
      future = [];
      break;
    case "decrement":
      past = [...past, count];
      count -= 1;
      future = [];
      break;
    case "undo":
      // past = [0, 1, 2] / count = 3 / future = []
      future = [count, ...future];
      // past = [0, 1, 2] / count = 3 / future = [3]
      count = past[past.length - 1];
      // past = [0, 1, 2] / count = 2 / future = [3]
      past = past.slice(0, -1);
      // past = [0, 1] / count = 2 / future = [3]
      break;
    case "redo":
      // past = [0] / count = 1 / future = [2, 3, 4, 5]
      past = [...past, count];
      // past = [0, 1] / count = 1 / future = [2, 3, 4, 5]
      count = future[0];
      // past = [0, 1] / count = 2 / future = [2, 3, 4, 5]
      future = future.slice(1, -1);
      // past = [0, 1] / count = 2 / future = [3, 4, 5]
      break;

    default:
      break;
  }

  return { past, count, future };
}

export default function CounterWithUndoRedo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleUndo = () => dispatch({ type: "undo" });
  const handleRedo = () => dispatch({ type: "redo" });

  return (
    <div>
      <div id="notice">
        <p>
          Gère toute la gestion de ce compteur avec useReducer, on doit pouvoir
          incrémenter et décrémenter.
        </p>
        <p>
          Mais aussi, on doit pouvoir faire un undo ou un redo et donc revenir à
          la valeur précédente du compteur.
        </p>
      </div>
      <h1>Counter: {state.count}</h1>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
