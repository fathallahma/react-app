import React from 'react';

import '../assets/style/addtask.css';
import Task from './task.jsx';
/*
 define root component
*/
export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const task = {
      description : this.refs.description.value,
      duration : parseInt(this.refs.duration.value)
    };
    this.props.addTask(task);
    this.clearFields();
  }


  clearFields() {
    this.refs.description.value = '';
    this.refs.duration.value = '';
  }

  render() {
    return(
      <div className="addPerson">
        <input
          type="text" placeholder="Task"
          ref="description"
        />
        <input
          type= "number" min="0" placeholder="Min"
          ref="duration"
        />
      <button onClick ={ this.handleClick }>Add</button>
      </div>
    );
  }

}
