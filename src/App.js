import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";

function App() {
  const [alert,setAlert] = useState();
  const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type,
  }) 
setTimeout(()=>{
  setAlert(null);
}, 1500)
}
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='hwb(218deg 2% 69%)'
      document.body.style.color='white'
      showAlert('Dark Mode has been enabled', "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert('Light Mode has been enabled', "success")
    }
  }
  return (
    <>






    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container">
      {/* <Routes> */}
        {/* <Route exact path="/" element={}> */}
          <TextForm heading="Enter a text here:" mode={mode} showAlert={showAlert} />
        {/* </Route>
        </Routes> */}
        </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
