import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';
// import About from './Components/About';
import {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert = (message , type) => {
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  if(mode === 'light'){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2c3039';
      document.body.style.color = 'white';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" togglemode = {toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
Navbar.propTypes = {title : PropTypes.string, aboutText : PropTypes.string}
Navbar.defaultProps ={title : "Set title here", aboutText: "Set about here"}