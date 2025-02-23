import { useState } from "react"
import { Example1, Example2 } from "./ProblemMoveState"

export const ProblemCompChildren = () => {
    return (
        <>
            <StateChange>
            <Example1 />
            <Example2 />
            </StateChange>
        </>
    )
}

const StateChange = ({children}: any) => {
    const [change, SetChange] = useState(false)
    return <>
            <button onClick={() => SetChange(!change)}>State Change {change ? 'Yesx' : 'No'}</button>
    {children}
    </>
}