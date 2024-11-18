import React, { useState } from "react";

const InputSample = () => {
    //텍스트로 관리
    const [text, setText] = useState("")

    //핸들러 관리
    const onChange = (e) => {
        setText(e.target.value)
    }

    //값 초기화
    const onReset = () => {
        setText("")
    }

    return (
        <>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>값 초기화</button>
            <div>
                <h1>값 : {text}</h1>
            </div>
        </>
    )
}

export default InputSample