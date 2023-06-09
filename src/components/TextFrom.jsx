import React, { useEffect } from "react";
import { useState } from "react";

function TextFrom(props) {
  const [text, setText] = useState(" ");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onClickHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase","success")
  };
  const ClickHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowercase","success")
  };
  const ClearHandler = () => {
    let newText = ("");
    setText(newText);
  }

  

  useEffect(() => {
    console.log("ho geya");
  });

  return (
    <>
      <div className="container my-3"  style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{backgroundColor: props.mode === "dark" ? "gray" : "white",
          color:props.mode === "dark" ? "white" : "black"}}
            className="form-control"
            value={text}
            onChange={onChangeHandler}
            id="myBox"
            rows="8"
            
          ></textarea>
        </div>

        <button
          className="btn btn-primary"
          onClick={onClickHandler}
          onChange={onChangeHandler}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={ClickHandler}
          onChange={onChangeHandler}
        >
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={ClearHandler}
          onChange={onChangeHandler}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-3"   style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter(i => i !=="").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

export default TextFrom;
