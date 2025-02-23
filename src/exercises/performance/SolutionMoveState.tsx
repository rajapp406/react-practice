import { useState } from "react"
import { Example1, Example2 } from "./ProblemMoveState"

export const SolutionMoveState = () => {
    return (
        <>
        <StateChange />
            <Example1 />
            <Example2 />
        </>
    )
}

const StateChange = () => {
    const [change, SetChange] = useState(false)
    return <>
            <button onClick={() => SetChange(!change)}>State Change {change ? 'Yes' : 'No'}</button>
    </>
}