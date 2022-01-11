import React from "react";
import "./App.css";
import "./components/Column/Column";
import Column from "./components/Column/Column";
import { states } from "./utils/constants";
import { Status } from "./types/Status";
import { testData } from "./utils/constants";
import { ICard } from "./interfaces/ICard";

function App() {
  const getCardsByStatus = (
    testData: Array<ICard>,
    status: Status
  ): Array<ICard> => {
    const filteredCards = testData.filter((card) => {
      return card.status === status;
    });

    return filteredCards;
  };

  return (
    <>
      <h1>Kanban Board</h1>
      <div className="container">
        {states.map((state, i) => (
          <Column
            key={i}
            cards={getCardsByStatus(
              testData as Array<ICard>,
              state.status as Status
            )}
            status={state.status as Status}
          />
        ))}
      </div>
    </>
  );
}

export default App;
