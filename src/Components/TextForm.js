import React , {useState} from 'react';


export default function TextForm(props) {
    const handleClear = () =>{
        if(text.length>0){
            setText("")
            props.showAlert("Text cleared", "success")
        }
        else{
            props.showAlert("No text to clear", "danger")
        }
    }
    const handleCapitalise = () =>{
        if(text.length>0){
            setText(text.charAt(0).toUpperCase() + text.slice(1))
            props.showAlert("Text capitalised", "success")
        }
        else{
            props.showAlert("No text to capitalise" , "danger")
        }
    }
    const handleLowClick= () =>{
        if(text.length>0){
            setText(text.toLowerCase());
            props.showAlert("Text converted to lower case", "success")
        }
        else{
            props.showAlert("No text to convert", "danger");
        }
    }
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        if(text.length>0){
            setText(text.toUpperCase())
            props.showAlert("Text converted to upper case", "success")
        }
        else{
            props.showAlert("No text to convert", "danger");
        }
    };
    const handleOnChange= (event) =>{
        // console.log("On change was used");
        setText(event.target.value);
    };
    const handleReverse = () =>{
        if(text.length>0){
            let newText = "";
            for(let i = text.length - 1 ; i>=0 ; i--){
                newText += text[i];
            }
            setText(newText)
            props.showAlert("Text reversed", "success")
        }
        else{
            props.showAlert("No text to reverse", "danger");
        }
    }
    const handleCopy = () =>{
        if(text.length>0){
            let newText = document.getElementById("myBox");
            newText.select();
            navigator.clipboard.writeText(newText.value);
            props.showAlert("Text copied to clipboard", "success")
        }
        else{
            props.showAlert("No text to copy", "warning");
        }
    }
    const [text,setText] = useState("");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">  
    <textarea className={`text-${props.mode === 'dark' ? 'light' : 'dark'} form-control border-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`} id="myBox" value = {text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className={`btn-${props.mode === 'dark' ? 'light' : 'dark'}  btn mx-1 my-1`} onClick={handleClear}>Clear Text</button>
    <button className={`btn-${props.mode === 'dark' ? 'light' : 'dark'}  btn mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
    <button className={`btn-${props.mode === 'dark' ? 'light' : 'dark'}  btn mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
    <button className={`btn-${props.mode === 'dark' ? 'light' : 'dark'}  btn mx-1 my-1`} onClick={handleCapitalise}>Capitalise</button>
    <button className={`btn-${props.mode === 'dark' ? 'light' : 'dark'}  btn mx-1 my-1`} onClick={handleReverse}>Reverse Text</button>
    <button className={`btn-${props.mode === 'dark' ? 'light' : 'dark'}  btn mx-1 my-1`} onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-2">
        <h3>Your text summary</h3>
        <p>{text != 0 ? text.charAt(text.length - 1) !== " " ?text.split(" ").length : text.split(" ").length - 1 : 0} words & {text.length} characters</p>
        <p>{text.length !==0 ? ( 0.008 * text.split(" ").length + 0.001 * (text.length - 1)).toFixed(4) : 0} minutes to read the entire text!</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : <><em>Enter text to preview</em></>}</p>
    </div>
    </> 
  )
}
