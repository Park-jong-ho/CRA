import React from "react";

const Counter = () => {
    const [state, setState] = useState(10)

    const onIncrease = () => {
        //새로쓰기 (값을 저장 안 함)
        // setState(state + 1) // 상태값을 변환해주는 함수
    }

    // 함수형 업데이트를 통해서 최신값을 보장받을 수 있다.
    // 이어쓰기 (값을 저장함)
    setState((prev) => prev + 1)
    setState((prev) => prev + 1)
    setState((prev) => prev + 1)

    const onDecrease = () => {
        setState(state + 1) // 상태값을 변환해주는 함수
    }

    return (
        <div>
            <div>
                <h1>state 값: {state}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>+1</button>
            </div>
        </div>
    )
}

export default Counter