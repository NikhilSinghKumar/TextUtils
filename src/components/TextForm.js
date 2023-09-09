import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase", "success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase", "success")
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () =>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied", "success")
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space removed", "success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const[text, setText] = useState("Enter text here")
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <div className="mb-3 my-5">
            <h1 className='my-4'>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white', color: props.mode==='dark'? 'white' : 'black'}} id="myBox" rows="6"></textarea>
            <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Uppercase</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleLoClick}>Lowercase</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleClearClick}>Clear</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleCopy}>Copy</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleExtraSpace}>Remove ExtraSpace</button>
        </div>
    </div>
    <div className='container my-2' style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h2>Text Analyser</h2>
        <p>{text.split(" ").length-1} Words {text.length} Chars</p>
        <p>{0.008 * (text.split(" ").length-1)} Min Avg Reading Time</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter text in form to see preview."}</p>
    </div>
    </>
  )
}
