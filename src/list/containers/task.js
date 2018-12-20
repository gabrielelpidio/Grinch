import React, { Component } from 'react';
import Task from '../components/task';

class TaskItem extends Component {
  state = {
    value: this.props.value,
    isChecked: false
  }
  onCheckButtonClick = event => {
     this.setState({
       isChecked: !this.state.isChecked
     })
     console.log(this.state.isChecked);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value){
      this.setState({          
          value: this.props.value
      });
    }
  }

  onDeleteButtonClick = event => {
    this.props.onDeleteButtonClick(this.props.id)
  }
  render() {
    return (
      <Task
        text={this.state.value ? this.state.value : "Untitled"}
        isChecked={this.state.isChecked}
        onCheckButtonClick={this.onCheckButtonClick}
        onDeleteButtonClick={this.onDeleteButtonClick}
      />
    )
  }
}

export default TaskItem