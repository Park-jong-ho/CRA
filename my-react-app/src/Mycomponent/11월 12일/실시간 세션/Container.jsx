import React from "react";

const Container = (props) => {
    const style = {
        border: "2px solid red",
        padding: "20px",
    }

    return (
        <div>
            <div style={style}>
                {props.children}
            </div>
        </div>
    )
}

export default Container