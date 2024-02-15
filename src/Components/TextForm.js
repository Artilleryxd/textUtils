import React , {useState} from 'react'
import { PropTypes } from 'prop-types'



export default function TextForm(props) {
    const handleClear = () =>{
        setText("")
    }
    const handleCapitalise = () =>{
        setText(text.charAt(0).toUpperCase() + text.slice(1))
    }
    const handleLowClick= () =>{
        setText(text.toLowerCase());
    }
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase())
    };
    const handleOnChange= (event) =>{
        // console.log("On change was used");
        setText(event.target.value);
    };
    const [text,setText] = useState("");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">  
    <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn-danger btn mx-1" onClick={handleClear}>Clear Text</button>
    <button className="btn-primary btn mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn-primary btn mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn-primary btn mx-1" onClick={handleCapitalise}>Capitalise</button>
    </div>
    <div className="container my-2">
        <h3>Your text summary</h3>
        <p>{text!= 0 ? text.charAt(text.length - 1) != " " ?text.split(" ").length : text.split(" ").length - 1 : 0} words & {text.length} characters</p>
        <p>{text.length !=0 ? ( 0.008 * text.split(" ").length + 0.001 * (text.length - 1)).toFixed(4) : 0} minutes to read the entire text!</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </> 
  )
}
