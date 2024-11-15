import React from "react";
import { useRef, useState} from "react"

const RefSample = () => {
    const inputRef = useRef(null)
    const value = uesRef(0)
    const [state, setState] = useState(0)


    const handleOnClick = (e) => {
        inputRef.current.focus()
        value.current += 1
        console.log("value : ", value);
        setState(state + 1)
        console.log("state : ", state);
    }

    return (
        <>
            <div>
                <input ref={inputRef} />
                <button onClick={handleOnClick}>인풋에 포커싱하는 역할</button>
            </div>
        </>
    )
}

export default RefSample