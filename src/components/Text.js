import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types';

export default function Text(props) {
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    const toUpperCase = ()=>{
        setText(text.toUpperCase());
        // let newText = text.toUpperCase();
        // setText(newText);
    }
    const toLowerCase = ()=>{
        setText(text.toLowerCase());
    }
    const toCamelCase = ()=>{
        let newText = ""
        let textArr = text.split(" ");
        textArr.map((c) => {
            newText += c.charAt(0).toUpperCase() + c.slice(1).toLowerCase() + " "
        })
        setText(newText);
    }
    const toClear = () => {
        setText("");
    }

  return (
    <>
        <div className='container' style={{backgroundColor:props.mode === 'dark'?'grey':'white'}}>
            <div className="mb-3 form-check">
                <textarea className='form-control' rows='8' id="myBox" onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'grey':'white'}} value={text}/>
            </div>
            <button className='btn btn-primary my-2 mx-2' onClick={toUpperCase}>UPPERCASE</button>
            <button className='btn btn-primary my-2 mx-2' onClick={toLowerCase}>lowercase</button>
            <button className='btn btn-primary my-2 mx-2' onClick={toCamelCase}>Camel Case</button>
            <button className='btn btn-primary my-2 mx-2' onClick={toClear}>Clear</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>Number of words = {text.split(' ').length}</p>
            <p>Number of characters = {text.length}</p>
            <p>Minutes to read = {text.split(' ').length * 0.008}</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here.'}</p>
        
        </div>
    </>
  )
}
