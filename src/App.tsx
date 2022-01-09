import React from "react";
import "./App.css";
import "./Column";
import Column from "./Column";
import { states, States } from "./utils/constants";

function App() {
  return (
    <>
      <h1>Kanban Board</h1>
      <div className="container">
        {states.map((state, i) => (
          <Column key={i} status={state.status} />
        ))}
      </div>
    </>
  );
}

export default App;
