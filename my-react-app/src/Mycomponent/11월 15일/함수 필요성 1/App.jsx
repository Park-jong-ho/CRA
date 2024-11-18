import { useEffect, useState } from "react";
import "./App.css"

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/data")
        .then((res) => res.json())
        .then((res) => setData(res));
    }, [])

    return (
        <>
            <div>데이터 목록</div>
            {data.map((el) => (<div key={el.id}>{el.content}</div>))}
            <MouseFollower />
            <ScrollIndicator />
            <AlertTimer />
            <div style={{height: "300vh"}}></div>
        </>
    )
}
//마우스 위치에 대한 이벤트 헨들러
const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY })
            console.log("mouseMoved!!");
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    })


    return (
        <div style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "blue",
            transform: "translate(-50%, -50%)", // 마우스커서 정 가운데에 생기도록
            pointerEvents: "none", //클릭에 관계를 주지 않아 클릭이 되도록 함
        }}></div>
    )
}
// 스크롤에 대한 이벤트 헨들러
const ScrollIndicator= () => {
    const [scrollWidth, setSctollWidth] = useState(0)

    useEffect(() => {
        const handleScoll = () => {
            const scrollTop = window.scrollY
            const windowHeight = 
            document.documentElement.scrollHeight
            - document.documentElement.clientHeight
            const scrollPercentage = (scrollTop / windowHeight) * 100
            setSctollWidth(scrollPercentage)
        }
        window.addEventListener("scroll", handleScoll)
        return () => {
            window.removeEventListener("scroll", handleScoll)
        }
    })

    return () => {
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${scrollWidth}%`,
            height: "10px",
            background: "blue",
        }}></div>
    }
}

// 타이머에 대한 이벤트 헨들러
const AlertTimer = () => {
    const [showAlert, setShowAlert] = useState(true)

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            showAlert === true ? alert('시간 초과') : null
        }, 3000)
        return () => {
            clearTimeout(setTimeoutId)
        }
    })

    return (
        <button onClick={() => setShowAlert(false)}>빨리 클릭!1=!</button>
    )

}
export default App