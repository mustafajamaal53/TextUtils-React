import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log('upper case was Clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been changed to Uppercase", "success")
  }

  const handleLowerClick = ()=>{
    console.log('upper case was Clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been changed to Lowercase", "success")
  }

  const handleClearText = ()=>{
   setText('');
  }

  const handleOnChange = (event)=> {
    console.log('On Change was Clicked');
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  return (
    <>
      {/* <div className='container my-2' style={{color : props.mode === 'light'?'black':'white'}}> */}
      <div className='container my-2'>
        <h1>{props.heading}</h1>
        <div className="mb">
          <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'? 'white':'black', border: '2px solid black'} } onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div><br/>
        <button className={`btn btn-${props.mode === 'light'?'dark':'light'}`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2`} onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2`}  onClick={handleClearText}>Clear Text</button>
      </div>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters</p>
        <p> {0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} minutes to read above text</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <br /><br />
      </div>
    </>
  )
}
