import React, { useState } from "react";
import "./addContainer.css";
import { Status } from "../../types/Status";
import AddButton from "../AddButton/AddButton";
import InputButton from "../InputButton/InputButton";

interface Props {
  status: Status;
}

const addItem = (status: Status) => {
  alert(status);
};

function AddContainer({ status }: Props) {
  const [hidden, setHidden] = useState<String>("");

  const toggleHidden = () => {
    if (hidden) {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  return (
    <>
      <AddButton status={status} onClick={toggleHidden} />
      <div className={`add-container ${hidden}`}>
        <div className="add-input">
          <div className="add-item" contentEditable="true"></div>
        </div>

        <div className="add-btn-group">
          <InputButton status={status} type={"Save"} onClick={toggleHidden} />
          <InputButton status={status} type={"Cancel"} onClick={toggleHidden} />
        </div>
      </div>
    </>

    //    <div ="add-btn" onClick={() => addItem(status)}>
  );
}

export default AddContainer;
