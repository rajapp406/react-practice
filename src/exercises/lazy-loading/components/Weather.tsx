import { Droppable } from 'react-beautiful-dnd'
import React from'react'
export default function Weather() {
    return (
        <>
            <Droppable droppableId="1">
                {
                (provided) =>(<Task innerRef={provided.innerRef}  {...provided.droppableProps} />)

                }
            </Droppable>


        </>
    )
}
function Task(){
    return (
        <>
        Weather
        </>
    )
}