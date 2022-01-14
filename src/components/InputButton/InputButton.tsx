import React from "react";
import "./inputButton.css";
import { Status } from "../../types/Status";

interface InputButtonProps {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
  status: Status;
  type: "Cancel" | "Save";
}

function InputButton({ disabled = false, onClick, type }: InputButtonProps) {
  return (
    <span
      className={`input-btn ${type.toLowerCase()}-btn ${
        disabled && "no-click"
      }`}
      onClick={onClick}
    >
      <strong>{type}</strong>
    </span>
  );
}

export default InputButton;
