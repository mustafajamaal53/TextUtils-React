/* eslint-disable no-unused-vars */
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes, //switch has been replaced with routes in react-router-dom v6
//   Route,
//   Link,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState({backgroundColor: 'white'})

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const handleBgColorChange = (color)=>{
    setBgColor({backgroundColor: color})
    console.log('color changed to ' + color)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
  }
  }
  return (
    // <Router>
      <div style={bgColor}>
        <Navbar title="TextUtils" handleBgColorChange={handleBgColorChange} mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container" >
          {/* <Routes> */}
                {/* <Route exact path="/about" element={<About/>}/> */}
                {/* <Route exact path="/" element={<TextForm showAlert={showAlert} bgColor={bgColor} heading="Enter the text below" mode={mode}/>}/> */}
                <TextForm showAlert={showAlert} bgColor={bgColor} heading="Enter the text below" mode={mode}/>
          {/* </Routes> */}
        </div>   
      </div>
    // </Router>
  );
}

export default App;
