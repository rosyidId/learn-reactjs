import React from "react";


const Button = (props) => {


    return (
        <div>
            <button onClick={() => props.clicked()}>Click</button>
        </div>
    )
}

export default Button;