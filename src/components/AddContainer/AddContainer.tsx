import React, { ChangeEvent, useState } from "react";
import "./addContainer.css";
import { Status } from "../../types/Status";
import AddButton from "../AddButton/AddButton";
import { ICard } from "../../interfaces/ICard";
import InputButton from "../InputButton/InputButton";
import TextInput from "../TextInput/TextInput";

interface Props {
  addNewCard(newCard: ICard): void;
  numCards: number;
  status: Status;
}

function AddContainer({ addNewCard, numCards, status }: Props) {
  const [newTitle, setNewTitle] = useState<String>("");
  const [newDescription, setNewDescription] = useState<String>("");
  const [hidden, setHidden] = useState<String>("hidden");

  const hideAddContainer = () => {
    if (hidden) {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  const saveNewCard = () => {
    addNewCard({
      id: ++numCards,
      status: status,
      title: newTitle as string,
      description: newDescription as string,
    });
    setNewTitle("");
    hideAddContainer();
  };

  return (
    <>
      <AddButton onClick={hideAddContainer} />
      <div className={`add-container ${hidden}`}>
        {/* <div className="add-inputs"> </div> */}
        <TextInput
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Title..."
          value={newTitle as string}
        />
        <TextInput
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="New Description..."
          value={newDescription as string}
        />

        <div className="add-btn-group">
          <InputButton
            disabled={!newTitle.length as unknown as boolean}
            status={status}
            type={"Save"}
            onClick={saveNewCard}
          />
          <InputButton
            status={status}
            type={"Cancel"}
            onClick={hideAddContainer}
          />
        </div>
      </div>
    </>
  );
}

export default AddContainer;
