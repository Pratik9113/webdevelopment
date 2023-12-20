import React,{useState} from 'react'

const Tech = (props) => {
  const[text,setText] = useState("enter the text here ");
  // setText("here is the corrected way to correct");

  const handleUpperCase = () =>{
    console.log("uppercase is clicked" + text);
    let newtext = text.toUpperCase();

    setText(newtext);
  }

  const handleClearCase = () =>{
    console.log("text is cleared" + text);
    let newtext = '';

    setText(newtext);
  }


  const handleCopytext = () => {
    console.log("copy text");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleLowerCase = () =>{
    console.log("Lowercase is clicked" + text);
    let newtext = text.toLowerCase();

    setText(newtext);
  }


  const handleExtraSpaces = () => {
    console.log("remove extra space");
    var newtext = text.replace(/\s+/g, ' ');
    setText(newtext);
  }
  const handleOnChange = (event) =>{
    console.log("on change is happpening ")
    setText(event.target.value)
  }
  return (
    <>
    <div className="container">
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="mybox" class="form-label">Example textarea</label> */}
            <textarea className="form-control"value= {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>

        <button className='btn btn-primary mx-2' onClick={handleUpperCase}>convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowerCase}>convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearCase}>clear</button>
        <button className='btn btn-primary mx-2' onClick={handleCopytext}>copy</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>remove spaces</button>
    </div>
    </div>
    <div className="container my-2">
      <h1>your text summary</h1>
      <p> {text.split(" ").length} words and  {text.length} characters</p>
      <p>user can read in time  {0.008 * text.split(" ").length}</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Tech
