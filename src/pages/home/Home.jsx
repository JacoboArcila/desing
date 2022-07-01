import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { data } from "../../data";
import {Container} from './HomeStyles.js';
import { Cards } from "../../components/cards/Cards";

export default function Home() {
  const [items, setItems] = useState(data);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <Container>
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map(( i ) => i.id)}
        strategy={rectSortingStrategy}
      >
        <Grid>
          {items.map(( i ) => (
            <Cards key={i.id} id={i.id} text={i.text} />
          ))}
        </Grid>
      </SortableContext>
    </DndContext>
    </Container>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(({ id }) => id === active.id);
        const newIndex = items.findIndex(({ id }) => id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

function Grid({ children }) {
  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridGap: 19,
      }}
    >
      {children}
    </div>
  );
}
