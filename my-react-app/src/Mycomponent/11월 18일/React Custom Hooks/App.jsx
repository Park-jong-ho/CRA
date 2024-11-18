import "./App.css"
import { useEffect, useState } from "react"

function App() {
    const {count, incremnet, decrement} = useCounter(0, 5)

    const { loading: loading1, data: data1 } = useFetch("http://localhost:3000/data")
    const { loading: loading2, data: data2 } = useFetch("http://localhost:3000/data")
    const { loading: loading3, data: data3 } = useFetch("http://localhost:3000/data")

    return (
        <>
            <div>
                <div>count: {count}</div>
                <button onClick={(incremnet)}>+</button>
                <button onClick={(decrement)}>-</button>
                {!loading1 && (
                    <ul>
                        {data1.map(el => <li key={'data1' + el.id}>{el.content}</li>)}
                    </ul>
                )}
                {!loading2 && (
                    <ul>
                        {data2.map(el => <li key={'data2' + el.id}>{el.content}</li>)}
                    </ul>
                )}
                {!loading3 && (
                    <ul>
                        {data3.map(el => <li key={'data3' + el.id}>{el.content}</li>)}
                    </ul>
                )}
            </div>
        </>
    )
}

//
const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res)
            setLoading(false)
        })
        .catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [url])

    return { data, loading, error }
}

//카운터 Custom Hooks
const useCounter = (initialValue = 0, step = 1) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => setCount((prev) => prev + 1)
    const decrement = () => setCount((prev) => prev - 1)

    return (count, increment, decrement)
}

export default App