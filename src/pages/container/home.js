import React, { Component } from 'react';
import HomeWrapper from '../components/home-wrapper';
import List from '../../list/components/list'
import AddTaskButton from '../../tasks-input/components/button'
import Task from '../../list/components/task'
import TextInput from '../../tasks-input/components/text-input';
import AddTaskForm from '../../tasks-input/components/add-task-form';
import TaskWrapper from '../../list/components/tasks-wrapper';
import TaskItem from '../../list/containers/task';
import GrinchInfo from '../../user/grinch-info';



class Home extends Component {
  state={
    tasks: [
      "Llevarse el banquete",
      "Llevarse los regalos",
      "Llevarse el árbol"
    ]
  }

  fillStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.fillStateWithLocalStorage()
  }
  setInputRef = element => {
    this.textInput = element
  }
  onAddButtonClick = event => {
    event.preventDefault();

    let newTasks = this.state.tasks
    newTasks.push(textInput.value)

    this.setState(prevState => ({
      tasks: [...newTasks]
    }))

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  onDeleteButtonClick = id => {
    let newTasks = this.state.tasks
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks
    })
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
 
  render(){
    return(
      <HomeWrapper>
        <GrinchInfo/>
        <List>
        <TaskWrapper>
          {
            this.state.tasks.map((item, i) =>{
              return <TaskItem
              onDeleteButtonClick={this.onDeleteButtonClick}
              key={i}
              id={i}
              value={item ? item : "Untitled"} 
              /> 
            })
          }
        </TaskWrapper>
          <AddTaskForm onButtonClick={this.onAddButtonClick} setRef={this.setInputRef}/>
        </List>  
      </HomeWrapper>
    )
  }

}


export default Home