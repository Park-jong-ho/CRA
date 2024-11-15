import React from "react";
import InputSample from "./InputSample";
import Counter from "./Counter";
import EffectSample from "./EffectSample";
import RefSample from "./RefSample";

const App = () => {
    const name  = "hi react"
    const isgoodComponent = false

    return (
        <>
            <Counter />
            <InputSample />
            <EffectSample />
            <RefSample />
        </>
    )
}

export default App