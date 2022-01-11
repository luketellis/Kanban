import React from "react";
import "./addButton.css";
import { Status } from "../../types/Status";

interface Props {
  status: Status;
}

const addItem = (status: Status): void => {
  alert(status);
};

function AddButton({ status }: Props) {
  return (
    <div className="add-btn" onClick={() => addItem(status)}>
      <button className="add-span">+ Add Item</button>
    </div>
  );
}

export default AddButton;
