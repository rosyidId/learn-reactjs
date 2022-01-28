import React, { useState } from 'react';
import './App.css';
import BindingData from './components/BindingData';
import NavigationBar from './components/NavigationBar';
import PlayList from './components/PlayList';

function App() {
  const [navBarValue, setNavBarValue] = useState('');
  const [playListValue, setPlayListValue] = useState('');

  // function merubah value
  const rubahNavbar = () => {
    setNavBarValue("My Contact");
  }

  // const ubahTombol = () => {
  //   console.log("tombol di click");
  // }
  // end function merubah value

  // merubah play list
  const rubahPlayList = () => {
    setPlayListValue("Ini play list Sudah di ubah");
  }

  return (
    <div>
      <NavigationBar setValue={navBarValue} />
      <hr />
      <h1>INI HOMEPAGE</h1>
      <p>{navBarValue}</p>
      <button onClick={() => rubahNavbar()}>Ubah Navigasi</button>
      <hr />
      <PlayList playValue={playListValue} />
      {/* <h1>{playListValue}</h1> */}
      <button onClick={() => rubahPlayList()}>Ubah Play List</button>
      <hr />
      <h2>Data Banding</h2>
      <BindingData />
    </div>
  );
}

export default App;
