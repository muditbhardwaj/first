import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [ mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=> {
      setAlert(null);
    },1500)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enable",'success');
      document.title = "Help you - dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enable",'success');
      document.title = "Help you - light mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/' element={<TextForm heading="Enter the text here" mode={mode} showAlert={showAlert}/>}></Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
