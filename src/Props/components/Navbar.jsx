import React from "react";


const Navbar = (props) => {
    return (
        
        <div>
            <h3>{props.navHeading}</h3>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">My Contact</a>
                </li>
                <li>
                    <a href="">{props.test}</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;