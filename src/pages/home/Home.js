import React, { useState } from "react";
import "./Home.css";
import Cards from "../../components/cards/Cards";
import { Container } from "./HomeStyles";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
  arrayMove,
} from "@dnd-kit/sortable";

const Home = () => {
  const [data, setData] = useState([
    {
      id: "1",
      text: "H",
    },
    {
      id: "2",
      text: "E",
    },
    {
      id: "3",
      text: "L",
    },
    {
      id: "4",
      text: "L",
    },
    {
      id: "5",
      text: "O",
    },
  ]);

  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = (active, over) => {
    if (active.id !== over.id) {
      setData((items) => {
        console.log(items);
        const oldIndex = data.findIndex((item) => item.id === active.id);
        const newIndex = data.findIndex((item) => item.id === over.id);

        arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Container>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={data.map((i) => i.id)}
          strategy={horizontalListSortingStrategy}
        >
          {data.map((item) => (
            <Cards key={item.id} name={item.text} ids={item.id} />
          ))}
        </SortableContext>
      </DndContext>
    </Container>
  );
};

export default Home;
