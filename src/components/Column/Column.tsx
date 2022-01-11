import React from "react";
import Card from "../Card/Card";
import ColumnHeading from "../ColumnHeading/ColumnHeading";
import "./column.css";
import { Status } from "../../types/Status";
import { ICard } from "../../interfaces/ICard";

interface Props {
  cards?: Array<ICard>;
  status: Status;
}

function Column({ cards, status }: Props) {
  return (
    <span className="column">
      <ColumnHeading status={status} />
      <Card
        card={{
          id: 1,
          title: "Hello",
          status: "Backlog",
          description: "This is me",
        }}
      />
    </span>
  );
}

export default Column;
