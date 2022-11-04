import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import React from "react";





function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'white';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <>



      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

        <TextForm heading="Enter Your Text To Analyze" mode={mode} />



        {/*   <About />*/}




      </div>


    </>
  );
}

export default App;
