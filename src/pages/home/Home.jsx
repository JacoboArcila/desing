import { closestCenter, DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React, { useState } from 'react';
import Cards from '../../components/cards/Cards';
import './Home.css';

function Home() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "H"
    },
    {
      id: "2",
      name: "E"
    },
    {
      id: "3",
      name: "L"
    },
    {
      id: "4",
      name: "L"
    },
    {
      id: "5",
      name: "O"
    }
  ])

  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = ({active, over}) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div
      style={{
        margin: 'auto',
        width: 200,
        textAlign: 'center'
      }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {
            items.map(
              item => <Cards {...item} key={item.id} />
            )
          }
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Home;