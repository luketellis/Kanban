import React from "react";
import "./inputButton.css";
import { Status } from "../../types/Status";

interface Props {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
  status: Status;
  type: "Cancel" | "Save";
}

const performAction = (type: "Cancel" | "Save", status: Status): void => {
  alert(type + " " + status);
};

function InputButton({ disabled = false, onClick, status, type }: Props) {
  return (
    <span
      className={`input-btn ${type.toLowerCase()}-btn ${
        disabled && "no-click"
      }`}
      onClick={onClick}
    >
      <span>{type}</span>
    </span>
  );
}

export default InputButton;
