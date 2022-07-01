import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, H1, Container } from "./CardsStyled";
import { useNavigate } from "react-router-dom";

export function Cards({ id, text }) {
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    width: 150,
    height: 100,
    padding: 15,
    border: "5px solid rgba(0,0,0,0.5)",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const clickHandle = (e) => {
    if (id === "5") {
      navigate("/contact");
    }
  };

  return (
    <Container>
      <Card
        cardColorHover={text === null ? "#956642" : ""}
        cardColor={text === null ? "#f4a261" : ""}
        cardCursor={text === null ? "pointer" : ""}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="divsito"
        handle
      >
        <div>
          <H1>{text}</H1>
        </div>
      </Card>
    </Container>
  );
}
