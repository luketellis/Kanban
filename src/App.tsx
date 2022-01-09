import React from "react";
import "./App.css";
import "./components/Column/Column";
import Column from "./components/Column/Column";
import { states } from "./utils/constants";

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
