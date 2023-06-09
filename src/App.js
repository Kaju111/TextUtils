import React, { useState } from "react";
import Navber from "./components/Navber";
import TextFrom from "./components/TextFrom";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState ("light")

  const [text, setText] = useState ("Enable light mode")

  const [alert, setAlert] = useState (null)

  const showAlert = (message , type) =>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }

  const toggleMode = () =>{
    if(mode === "light"){
    setMode ("dark")
    setText("Enable light mode")
    document.body.style.backgroundColor = "gray";
    showAlert("Dark mode has been enable","success")
    // document.text.style.color = "white";
      
  }
   else{
    setMode  ("light")
    setText("Enable dark mode")
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enable","success")
  }  
}
  return (
    <div className="App">
<Router>
   <Navber title="TextUtils" mode={mode} toggleMode={toggleMode} text={text}  />
     <Alert alert={alert}/>

      <Routes>

          <Route path="/about" element={<About toggleMode={toggleMode} mode={mode}/>}/>
           
          <Route path="/" element={<TextFrom heading="Enter the text analyze below" showAlert={showAlert} mode={mode} />}/>
     
      </Routes>
         
</Router>
     
    </div>
  );
}

export default App;
