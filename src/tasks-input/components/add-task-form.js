import React from 'react'
import TextInput from './text-input';
import AddTaskButton from './button';
import './add-task-form.css'

const AddTaskForm = (props) => {
  return ( 
    <form onSubmit={props.onButtonClick} className="inputWrapper">
      <TextInput setRef={props.setRef}>
        <AddTaskButton onClick={props.onButtonClick}/>
      </TextInput>
    </form>
  );
}
 
export default AddTaskForm;