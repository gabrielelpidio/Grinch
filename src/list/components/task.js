import React from 'react'
import './task.css'
import CheckButton from './check-button';
import DeleteButton from './delete-button';


const Task = (props) => {
  return ( 
    <div className="taskItem">
      <div className="leftActions">
        <CheckButton isChecked={props.isChecked} onClick={props.onCheckButtonClick}/>
        <p className= {props.isChecked ? "textChecked" : "textUnchecked"} >
          {props.text}
        </p>
      </div>
      <div className="rightActions">
        <DeleteButton onClick={props.onDeleteButtonClick} />
      </div>      
    </div>
  );
}
 
export default Task;