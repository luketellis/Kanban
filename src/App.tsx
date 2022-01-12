import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/Column/Column";
import Column from "./components/Column/Column";
import { states } from "./utils/constants";
import { Status } from "./types/Status";
import { testData } from "./utils/constants";
import { ICard } from "./interfaces/ICard";

function App() {
  interface IAppState {
    cards: Array<ICard>;
  }

  const [cards, setCards] = useState<ICard[]>([]);
  const [numCards, setNumCards] = useState<number>(0);

  const getCardsByStatus = (status: Status): Array<ICard> => {
    const filteredCards = cards.filter((card) => {
      return card.status === status;
    });

    return filteredCards;
  };

  useEffect(() => {
    setCards(testData as Array<ICard>);
  }, []);

  useEffect(() => {
    setNumCards(cards.length);
  }, [cards]);

  const addNewCard = (newCard: ICard): void => {
    setCards((prevState) => [...prevState, newCard]);
  };

  return (
    <>
      <h1>Kanban Board</h1>
      <div className="kanban-container">
        {states.map((state, i) => (
          <Column
            key={i}
            addNewCard={addNewCard}
            cards={getCardsByStatus(state.status as Status)}
            numCards={numCards}
            status={state.status as Status}
          />
        ))}
      </div>
    </>
  );
}

export default App;
