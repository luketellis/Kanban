import React from "react";
import Card from "../Card/Card";
import ColumnHeading from "../ColumnHeading/ColumnHeading";
import "./column.css";
import { Status } from "../../types/Status";
import { ICard } from "../../interfaces/ICard";
import AddContainer from "../AddContainer/AddContainer";

interface Props {
  addNewCard(newCard: ICard): void;
  cards: Array<ICard>;
  numCards: number;
  removeCard(id: number): void;
  status: Status;
}

function Column({ addNewCard, cards, numCards, removeCard, status }: Props) {
  return (
    <span className="column">
      <ColumnHeading status={status} />
      {cards.map((card, i) => {
        return <Card card={card} key={i} removeCard={removeCard} />;
      })}

      <AddContainer
        addNewCard={addNewCard}
        numCards={numCards}
        status={status}
      />
    </span>
  );
}

export default Column;
