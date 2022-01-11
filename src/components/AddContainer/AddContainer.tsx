import React from "react";
import "./addContainer.css";
import { Status } from "../../types/Status";
import InputButton from "../InputButton/InputButton";

interface Props {
  status: Status;
}

const addItem = (status: Status): void => {
  alert(status);
};

function AddContainer({ status }: Props) {
  return (
    <div className="add-container">
      <div className="add-input">
        <div className="add-item" contentEditable="true"></div>
      </div>

      <div className="add-btn-group">
        <InputButton status={status} type={"Save"} />
        <InputButton status={status} type={"Cancel"} />
      </div>
    </div>

    //    <div ="add-btn" onClick={() => addItem(status)}>
  );
}

export default AddContainer;
