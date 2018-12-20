import React from 'react'
import './task-wrapper.css'

const TaskWrapper = (props) => {
  return ( 
    <div className="taskWrapper">
      {props.children}
    </div>
  );
}
 
export default TaskWrapper;