import React, { useContext, useEffect, useState } from "react"
import { DataContext } from "../todo/context/DataContext";

export const ProblemMoveState = () => {
    const [change, SetChange] = useState(false);
    const { selectedList, setSelectedList} = useContext(DataContext);

    return (
        <>
            <Example1 />
            <Example2 />
        </>
    )
}

export const Example1 = () => {
    const { selectedList, setSelectedList} = useContext(DataContext);

    console.log('Example1!')
    return <>
            <button onClick={() => setSelectedList(Math.random()*100)}>State Change {selectedList ? 'Yes' : 'No'}{selectedList}</button>
      <p> Hello Example1!</p> 
    </>
}
export const Example2 = () => {
    console.log('Example2!')
    return <>
         <p> Hello Example2!</p> 
    </>
}