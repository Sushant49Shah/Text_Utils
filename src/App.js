import React from 'react'
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [textMode,setTextMode]=useState('Enable Darkmode');
  const [mode,setMode]=useState('light');
  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      showAlert('Dark mode enabled','success');
      document.title='TextUtils - Dark Mode';
      setTextMode('Disable Darkmode');
    }
    else{
      setMode('light');
      showAlert('Light mode enabled','success');
      document.title='TextUtils - Light Mode'
      setTextMode('Enable Darkmode');
    }
  }

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    
    <body className="mainBody">
    <Navbar mode={mode} toggleMode={toggleMode} textMode={textMode}/>
    <Alert alert={alert}/>
    <TextForm mode={mode} toggleMode={toggleMode} showAlert={showAlert} textMode={textMode}/>
    </body>
  );
}

export default App;
