import React from "react";
import "./addButton.css";

interface Props {
  onClick: React.MouseEventHandler<HTMLElement>;
}

function AddButton({ onClick }: Props) {
  return (
    <div className="add-btn" onClick={onClick}>
      <button className="add-span">+ Add Item</button>
    </div>
  );
}

export default AddButton;
