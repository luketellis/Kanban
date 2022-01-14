import React from "react";
import "./columnHeading.css";
import { Status } from "../../types/Status";

interface ColumnHeadingProps {
  status: Status;
}

function ColumnHeading({ status }: ColumnHeadingProps) {
  return (
    <div className="headingCard">
      <h2> {status} </h2>
    </div>
  );
}

export default ColumnHeading;
