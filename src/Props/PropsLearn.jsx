import React from "react";
import '../App.css';
import Button from "./components/Button";
import Footter from "./components/Footter";
import Navbar from "./components/Navbar";


const PropsLearn = () => {
    const navHeading = "Navigation Bar";
    const navText = "Sosmed";
    const iniFooter = "My Footer";

    const clicked = () => {
        alert("Selamat datang");
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
                <Button clicked={clicked} />
                <Footter paragraf={paragraf} iniFooter={iniFooter} />
            </header>
        </div>
    )
}

export default PropsLearn;