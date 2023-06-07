import React from 'react'
import { useState } from 'react' 

function TextFrom(props) {
  
  const [text, setText] = useState("Text area change")

  const onChangeHandler = (event) =>{
   
      setText(event.target.value)
  }

  const onClickHandler = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    setButton("convert to lowercase")
  }


  const[button, setButton] =useState ("Convert to uppercase")



  return (
    <div className='container my-3'>
    <h1>{props.heading}</h1>
    <div class="mb-3">  
    <textarea class="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
</div>

    <button className="btn btn-primary" onClick={onClickHandler} onChange={onChangeHandler}>{button}</button>
    </div>
  )
}

export default TextFrom
