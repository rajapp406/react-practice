import React, { useState } from "react"
import { Example1, Example2 } from "./ProblemMoveState"

export const ProblemCompProps = () => {
    return (
        <>
            <Layout column={ <Example1 />} content={ <Example2 />}>
            </Layout>
        </>
    )
}

const Layout = ({column, content}: any) => {
    const [change, SetChange] = useState(false)
    return <>
            <button onClick={() => SetChange(!change)}>State Change {change ? 'Yes' : 'No'}</button>
    <div style={{backgroundColor: 'red', width: '100px'}}>{column}</div>
    <div style={{backgroundColor: 'blue', width: '100px'}}>{content}</div>


    </>
}

const Example1Memo = React.memo(Example1);
console.log(Example1Memo, 'kkk')