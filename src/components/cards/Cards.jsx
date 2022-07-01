import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import { Card } from './CardsStyled';

const Cards = ({
    id,
    name
}) => {
    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform,
        isDragging,
    } = useSortable({ id: id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        border: '2px solid black',
        marginBottom: 5,
        marginTop: 5,
        opacity: isDragging ? 0.5 : 1,
    }

    return (
        <Card
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >
            <h1>{name}</h1>
        </Card>
    )
}

export default Cards;