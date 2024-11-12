import React from "react";

// const Hello = (props) => {
//     return(
//         <div>
//             <div>
//                 <h1>내 이름은 : {props.name}</h1>
//                 <h1>내 나이는 : {props.age}</h1>
//                 <h1>내 키는 : {props.height}</h1>
//                 <h1>남성 여부 : {props.isMan.toString()}</h1>
//                 <h1>나의 정보 : {props.info.desc}</h1>
//                 <h1>등록 시간 : {props.info.date.toLocaleString()}</h1>
//             </div>
//         </div>
//     )
// }

const Hello = ({ name="Hi TypeScript", age="30", height, isMan, info }) => {


    return(
        <div>
            <div>
                <h1>내 이름은 : {name}</h1>
                <h1>내 나이는 : {age}</h1>
                <h1>내 키는 : {height}</h1>
                <h1>남성 여부 : {isMan.toString()}</h1>
                <h1>나의 정보 : {info.desc}</h1>
                <h1>등록 시간 : {info.date.toLocaleString()}</h1>
            </div>
        </div>
    )
}

// 컴포넌트.defaultprops
Hello.defaultProps = {
    height: 100,
}



export default Hello