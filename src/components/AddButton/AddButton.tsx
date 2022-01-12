import React from "react";
import "./addButton.css";

interface Props {
  onClick: React.MouseEventHandler<HTMLElement>;
}

function AddButton({ onClick }: Props) {
  return (
    <button className="add-btn" onClick={onClick}>
      + Add Item
    </button>
  );
}

export default AddButton;
