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
      <span className="plus-sign">+</span>
      <span className="">Add Item</span>
    </div>
  );
}

export default AddButton;
