import React from "react";
import Card from "../Card/Card";
import "./column.css";
import { State } from "../../interfaces/State";

function Column({ status }: State) {
  return (
    <span>
      <h2 className="column">
        {status}
        <Card card={{ id: 1, title: "Hello", description: "This is me" }} />
      </h2>
    </span>
  );
}

export default Column;
