import { useState } from "react"

export const ProblemMoveState = () => {
    const [change, SetChange] = useState(false)
    return (
        <>
            <button onClick={() => SetChange(!change)}>State Change {change ? 'Yes' : 'No'}</button>
            <Example1 />
            <Example2 />
        </>
    )
}

export const Example1 = () => {
    console.log('Example1!')
    return <>
      <p> Hello Example1!</p> 
    </>
}
export const Example2 = () => {
    console.log('Example2!')
    return <>
         <p> Hello Example2!</p> 
    </>
}