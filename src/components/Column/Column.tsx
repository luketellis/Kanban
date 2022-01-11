import React from "react";
import Card from "../Card/Card";
import ColumnHeading from "../ColumnHeading/ColumnHeading";
import "./column.css";
import { Status } from "../../types/Status";
import { ICard } from "../../interfaces/ICard";
import AddButton from "../AddButton/AddButton";
import AddContainer from "../AddContainer/AddContainer";

interface Props {
  cards: Array<ICard>;
  status: Status;
}

function Column({ cards, status }: Props) {
  return (
    <span className="column">
      <ColumnHeading status={status} />
      {cards.map((card, i) => {
        return <Card card={card} key={i} />;
      })}
      <AddButton status={status} />
      <AddContainer status={status} />
    </span>
  );
}

export default Column;
