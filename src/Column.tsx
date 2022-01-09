import React from "react";
import { states } from "./utils/constants";
import "./App.css";
import { State } from "./interfaces/State";

function Column({ status }: State) {
  return (
    <span>
      <h2>{status}</h2>
    </span>
  );
}

export default Column;
