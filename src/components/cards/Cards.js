import React from "react";
import { Card } from "./CardsStyled";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const cards = ({ ids, name }) => {
  const { setNodeRef, attributes, listeners, transition, transform } =
    useSortable({ id: ids });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    border: "2px solid black",
    marginBottom: 5,
    marginTop: 5,
  };

  return (
    <div>
      <Card ref={setNodeRef} {...attributes} {...listeners} style={style}>
        <h1>{name}</h1>
      </Card>
    </div>
  );
};

export default cards;
