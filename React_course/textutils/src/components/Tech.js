import React,{useState} from 'react'

const Tech = (props) => {
  const[text,setText] = useState("enter the text here ");
  // setText("here is the corrected way to correct");

  const handleUpperCase = () =>{
    console.log("uppercase is clicked" + text);
    let newtext = text.toUpperCase();

    setText(newtext);
  }

  const handleOnChange = (event) =>{
    console.log("on change is happpening ")
    setText(event.target.value)
  }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="mybox" class="form-label">Example textarea</label> */}
            <textarea className="form-control"value= {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>

        <button className='btn btn-primary' onClick={handleUpperCase}>convert to uppercase</button>
    </div>
    </>
  )
}

export default Tech
