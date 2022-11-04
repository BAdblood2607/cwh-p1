//vdo#7
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClear = () => {
        // console.log("uppercase was clicked " + text);
        let newText = ' ';
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("onchange ");
        setText(event.target.value);
    }




    const [text, setText] = useState('Enter the text here');
    //text = "new text"; wrng way to change state
    //setText= "new text"; correct way to chnage state




    return (
        <>
            <div className="container" style={{color: props.mode=== 'light' ? 'white' : 'black'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'black':'white' , color: props.mode=== 'light' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To UpperCase</button>
                <button className="btn btn-primary mx-2 " onClick={handleLoClick} >Convert To LowerCase</button>
                <button className="btn btn-primary mx-2 " onClick={handleClear} >Clear Text</button>
            </div>

            <div className="container  my-3" style={{color: props.mode=== 'light' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to Preview"}</p>
            </div>
        </>
    )
}
