import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  let toggleMode = () => {
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "Success");
      document.title= "TextUtils- Dark Mode";
      setInterval(()=>{
        document.title = "TextUtils is amazing"
      }, 2000)
      setInterval(()=>{
        document.title = "Install TextUtils"
      }, 1500)
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "Success");
      document.title= "TextUtils- Light Mode";
      
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />} /> 
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Form" mode={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;