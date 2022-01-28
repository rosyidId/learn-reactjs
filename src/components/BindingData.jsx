import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../logo.svg';

const BindingData = () => {
    const [text, setText] = useState('');
    const [showImage, setShowImage] = useState("");

    return (
        <div className='App'>
            <header className='App-header'>
                {showImage ? (
                    <img src={logo} alt="logo" />
                ) : ("")}
                <h5>{text}</h5>
                <input type="text" placeholder='type here' onChange={(type) => setText(type.target.value)} />
            </header>
        </div>
    )
}

export default BindingData;
