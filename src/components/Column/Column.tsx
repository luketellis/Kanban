import React from "react";
import Card from "../Card/Card";
import "./column.css";
import { Status } from "../../types/Status";

interface Props {
  status: Status;
}

function Column({ status }: Props) {
  return (
    <span>
      <h2 className="column">
        {status}
        <Card
          card={{
            id: 1,
            title: "Hello",
            status: "Backlog",
            description: "This is me",
          }}
        />
      </h2>
    </span>
  );
}

export default Column;
