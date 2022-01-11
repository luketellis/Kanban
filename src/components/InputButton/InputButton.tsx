import React from "react";
import "./inputButton.css";
import { Status } from "../../types/Status";

interface Props {
  onClick: React.MouseEventHandler<HTMLElement>;
  status: Status;
  type: "Cancel" | "Save";
}

const performAction = (type: "Cancel" | "Save", status: Status): void => {
  alert(type + " " + status);
};

function InputButton({ onClick, status, type }: Props) {
  return (
    <span className={`input-btn ${type.toLowerCase()}-btn`} onClick={onClick}>
      <span>{type}</span>
    </span>
  );
}

export default InputButton;
