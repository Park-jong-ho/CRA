import { useRef, useState } from "react"
import "./App.css"

function App() {
    return (
        <div>
            <ControlledInput />
            <br />
            <UseRefInput />
            <Counter />
        </div>
    )
}

export default App

// 유지되는 값을 변수로 담아 사용하기
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const numberRef = useRef=(null)

    return (
        <>
            <div>
                <div>counter: {counter}</div>
                <button onClick={() => setCounter(prev=> prev+1)}>+</button>
                <button onClick={() => setCounter(prev=> prev-1)}>-</button>
                <button onClick={() => numberRef.current = counter}>Keep Value</button>
                <button onClick={() => console.log(numberRef.current)}>Show Value</button>
            </div>
        </>
    )
}

//리렌딩이 되지 않음
const UseRefInput = () => {
    const inputRef = useRef(null)
    const getInputValue = () => {
        console.log(inputRef.current.value);
    }
    const focusInput = () => {
        inputRef.current.focus()
    }
    return ( 
        <div>
            <input ref={inputRef} />
            <button onClick={getInputValue}>input 값 가져오기</button>
            <button onClick={focusInput}>focus!</button>
        </div>
    )
}
 
const ControlledInput = () => {
    const [inputValue, setInputValue] = useState('')
    return (
        <input value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        />
    )
}