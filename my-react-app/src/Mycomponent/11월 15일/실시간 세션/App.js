import React from "react";
import InputSample from "./InputSample";
import Counter from "./Counter";

const App = () => {
    const name  = "hi react"
    const isgoodComponent = false

    return (
        <>
            <Counter />
            <InputSample />
        </>
    )
}

export default App