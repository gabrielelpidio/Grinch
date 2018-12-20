import React from 'react'
import './text-input.css'

const TextInput = (props) => {
  return ( 
    <div className="textInputWrapper"> 
      <input 
      type="text" 
      name="text-input" 
      id="textInput" 
      placeholder="Add a task to ruin christmas"
      ref={props.setRef}
      />
      {props.children}
    </div>
  );
}
 
export default TextInput;