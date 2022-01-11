import React from "react";
import "./inputButton.css";
import { Status } from "../../types/Status";

interface Props {
  status: Status;
  type: "Cancel" | "Save";
}

const performAction = (type: "Cancel" | "Save", status: Status): void => {
  alert(type + " " + status);
};

function InputButton({ status, type }: Props) {
  return (
    <span
      className={`input-btn ${type.toLowerCase()}-btn`}
      onClick={() => {
        performAction(type, status);
      }}
    >
      <span>{type}</span>
    </span>
  );
}

export default InputButton;
