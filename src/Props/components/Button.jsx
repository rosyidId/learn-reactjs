import React from "react";


const Button = (props) => {


    return (
        <div>
            <button onClick={() => props.clicked()}>Click</button>
            <button onClick={() => props.navHeading()} >Merubah Nav</button>
        </div>
    )
}

export default Button;