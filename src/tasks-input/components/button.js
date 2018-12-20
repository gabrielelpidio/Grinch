import React from 'react'
import './button.css'

const AddTaskButton = (props) => {
  return (  
    <div onClick={props.onClick} className="button"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="white"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
      </svg>
    </div>
  );
}
 
export default AddTaskButton;