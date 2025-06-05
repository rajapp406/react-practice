import React from "react";
import { useCallback, useMemo, useState } from "react"

export const TestMemo = () => {
    const [text, setText] = useState('' as any);

const fn = useMemo(() => [1,2],[]);
//const fn = () => [1,2];
const onClick = useCallback(() => {
}, [text]);
/*const onClick = () => {
    console.log('hello!')
};*/
const mem1 = [3,4];
    return <>
        <Memo1 onClick={onClick}/>
        <button onClick={() =>setText(Math.random())}>Click Me!</button>
        Text: {text}
    </>
}

const Memo1 = React.memo(({onClick}: any) => {
    console.log('memo1', onClick)
    return <>
        Memo Test!
    </>
})