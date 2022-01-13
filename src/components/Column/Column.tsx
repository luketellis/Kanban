import React from "react";
import AddContainer from "../AddContainer/AddContainer";
import Card from "../Card/Card";
import ColumnHeading from "../ColumnHeading/ColumnHeading";
import "./column.css";
import { ICard } from "../../interfaces/ICard";
import { Status } from "../../types/Status";
import { useDrop } from "react-dnd";

interface Props {
  addNewCard(newCard: ICard): void;
  cards: Array<ICard>;
  numCards: number;
  editCardStatus(cardId: number, property: string, newValue: string): void;
  removeCard(id: number): void;
  status: Status;
}

function Column({
  addNewCard,
  cards,
  editCardStatus,
  numCards,
  removeCard,
  status,
}: Props) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: (item: any) => {
      //alert(JSON.stringify(item));
      editCardStatus(item.id as number, "status", status);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <span className="column" ref={dropRef}>
      <ColumnHeading status={status} />

      {cards.map((card, i) => {
        return <Card card={card} key={i} removeCard={removeCard} />;
      })}
      {isOver && <div>Drop Here!</div>}

      <AddContainer
        addNewCard={addNewCard}
        numCards={numCards}
        status={status}
      />
    </span>
  );
}

export default Column;
