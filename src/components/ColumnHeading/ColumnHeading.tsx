import React from "react";
import "./columnHeading.css";
import { Status } from "../../types/Status";

interface Props {
  status: Status;
}

function ColumnHeading({ status }: Props) {
  return (
    <div className="headingCard">
      <h2> {status} </h2>
    </div>
  );
}

export default ColumnHeading;
