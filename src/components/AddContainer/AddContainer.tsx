import React, { useState } from "react";
import "./addContainer.css";
import { Status } from "../../types/Status";
import AddButton from "../AddButton/AddButton";
import { ICard } from "../../interfaces/ICard";
import InputButton from "../InputButton/InputButton";

interface Props {
  addNewCard(newCard: ICard): void;
  status: Status;
}

const addItem = (status: Status) => {
  alert(status);
};

function AddContainer({ addNewCard, status }: Props) {
  const [newCardName, setNewCardName] = useState<String>("");
  const [hidden, setHidden] = useState<String>("");

  const toggleHidden = () => {
    if (hidden) {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  const saveNewCard = () => {
    addNewCard({
      id: 1,
      status: status,
      title: newCardName as string,
      description: "",
    });
    setNewCardName("");
    toggleHidden();
  };

  return (
    <>
      <AddButton status={status} onClick={toggleHidden} />
      <div className={`add-container ${hidden}`}>
        <div className="add-input">
          <input
            className="add-item"
            contentEditable="true"
            value={newCardName as string}
            onChange={(e) => setNewCardName(e.target.value)}
          ></input>
        </div>

        <div className="add-btn-group">
          <InputButton
            disabled={!newCardName.length as unknown as boolean}
            status={status}
            type={"Save"}
            onClick={saveNewCard}
          />
          <InputButton status={status} type={"Cancel"} onClick={toggleHidden} />
        </div>
      </div>
    </>

    //    <div ="add-btn" onClick={() => addItem(status)}>
  );
}

export default AddContainer;
