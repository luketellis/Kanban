import React from "react";
import "./App.css";
import "./components/Column/Column";
import Column from "./components/Column/Column";
import { states } from "./utils/constants";
import { Status } from "./types/Status";

function App() {
  return (
    <>
      <h1>Kanban Board</h1>
      <div className="container">
        {states.map((state, i) => (
          <Column key={i} status={state.status as Status} />
        ))}
      </div>
    </>
  );
}

export default App;
