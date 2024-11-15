import { Component, useDebugValue, useEffect, useState } from "react";
import "./App.css"

function App() {
    const [showCounter, setShowCounter] = useState(false);

    return (
        <>
            {showCounter && <Counter />}
            <br />
            <button onClick={() => setShowCounter((prev) => !prev)}>show?</button>
        </>
    )
}

function Counter() {
   const [counter, setCounter] = useState(1)
   const [counter2, setCounter2] = useState(100)
//------------------------------------
   // 1. 컴포넌트가 최초로 렌더링 될 때만 조작을 하고 싶다.
   useEffect(() => {
    console.log("맨 처음 렌더링 될 때");
   }, [])

   // 2. 컴포넌트가 리렌더링 될 때 조작하고 싶다!
   useEffect(() => {
    console.log("리렌더링...");
   })

   // 3. 특정 상태값이 변할 때만 조작하고 싶다.
   useEffect(() => {
    console.log("counter의 값이 변할 때");
   }, [counter])

   useEffect(() => {
    console.log("counter2의 값이 변할 때");
   }, [counter2])

   // 4. 컴포넌트가 최종적으로 언마운트 될 때 조작하고 싶을 때
   useEffect(() => {
    return () => {
        console.log("returned function");
    }
   }, [])
//------------------------------------
   useEffect(() => {
    console.log("useEffect");
    return () => {
        console.log("returned function");
    }
   }, [counter2])
    
    return (
        <>
            <div>counter : {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <div>counter2 : {counter2}</div>
            <button onClick={() => setCounter2(counter2 - 1)}>-1</button>
        </>
    )
}

export default App