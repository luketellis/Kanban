import React from "react";
import "./addButton.css";

interface AddButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

function AddButton({ onClick }: AddButtonProps) {
  return (
    <button className="add-btn" onClick={onClick}>
      + Add Item
    </button>
  );
}

export default AddButton;
