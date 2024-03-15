import React, {useState} from 'react'

export default function TextForm(props) {
  const handelUpClick = ()=>{
    //console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to UpperCase!", "success")
  }

  const handelLoClick = ()=>{
    //console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to LowerCase!", "success")
  }

  const handelClearClick = ()=>{
    //console.log("Lowercase was clicked: " + text);
    let newText = ' ';
    setText(newText)
    props.showAlert("converted to ClearCase!", "success")
  }

  const handelOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState(' ');
  //text = ("new text"); its is wrong way to change the state
  //setText = ("new text"); 
  return (
  <>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} - {text}</h1>
      <div className="mb-5">
      <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
    </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handelLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handelClearClick}>Convert to Clear text</button>
    </div>
    <div className="container">
      <h1>Our text Summary</h1>
      <p>{text.split("").length} words and {text.length} characters </p>
      <p>{0.008 * text.split("").length} Minutes read </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
</>
  )
}

