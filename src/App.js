import React, { useState } from "react";
import Navber from "./components/Navber";
import TextFrom from "./components/TextFrom";
import About from "./components/About";

function App() {

  const [mode, setMode] = useState ("light")

  const [text, setText] = useState ("Enable light mode")
  


  const toggleMode = () =>{
    if(mode === "light"){
    setMode ("dark")
    setText("Enable light mode")
    document.body.style.backgroundColor = "gray";
    // document.text.style.color = "white";
      
  }
   else{
    setMode  ("light")
    setText("Enable dark mode")
    document.body.style.backgroundColor = "white";
    
  }  
}
  return (
    <div className="App">
     <Navber title="TextUtils" mode={mode} toggleMode={toggleMode}  text={text} />
     <TextFrom heading="Enter the text analyze below" mode={mode}/>
     {/* <About toggleMode={toggleMode} mode={mode}/> */}
    </div>
  );
}

export default App;
