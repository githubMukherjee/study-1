import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');// Whenaber dark mode is enabel or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() =>{
    setAlert(null);
  }, 3000);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is activated", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("lights mode is activated", "success");
    }
  }
  return (
    <>
    {/*<Navbar title="Textutiles" aboutText="About Us"/>*/}
    {/*<Navbar/>*/}
    <Navbar title= "TextUtiles" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/*<TextForm showAlert={showAlert} heading="Enter the text to analyaze" mode={mode}/>*/}
    <About/>
    </div>
    </>
  );
}

export default App;
