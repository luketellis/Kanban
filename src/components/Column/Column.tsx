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
  status: Status;
}

function Column({ addNewCard, cards, status }: Props) {
  return (
    <span className="column">
      <ColumnHeading status={status} />
      {cards.map((card, i) => {
        return <Card card={card} key={i} />;
      })}
      <AddContainer addNewCard={addNewCard} status={status} />
    </span>
  );
}

export default Column;
