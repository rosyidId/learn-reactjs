import React, { useState } from "react";
import '../App.css';
import Button from "./components/Button";
import Footter from "./components/Footter";
import Navbar from "./components/Navbar";


const PropsLearn = () => {
    const [navHeading, setNavHeading] = useState("");
    const navText = "Sosmed";
    const iniFooter = "My Footer";

    const clicked = () => {
        alert("Selamat datang");
    }

    const rubahHeading = () => {
        setNavHeading('Heading dirubah');
    }

    const paragraf = () => {
        return (
            <div>
                <h3>Selamat datang kalian</h3>
                <h1>Horeeee</h1>
                <marquee>Belajar props</marquee>
            </div>
        )
    }


    return (
        <div className="App">
            <header className="App-header">
                <Navbar test={navText} navHeading={navHeading} />
                <Button clicked={clicked} navHeading={rubahHeading}/>
                <Footter paragraf={paragraf} iniFooter={iniFooter} />
            </header>
        </div>
    )
}

export default PropsLearn;