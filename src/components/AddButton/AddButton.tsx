import React from "react";
import "./addButton.css";
import { Status } from "../../types/Status";

interface Props {
  onClick: React.MouseEventHandler<HTMLElement>;
  status: Status;
}

const addItem = (status: Status): void => {
  alert(status);
};

function AddButton({ onClick, status }: Props) {
  return (
    <div className="add-btn" onClick={onClick}>
      <button className="add-span">+ Add Item</button>
    </div>
  );
}

export default AddButton;
