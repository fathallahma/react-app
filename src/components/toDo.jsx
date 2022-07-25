import React from 'react';

import Task from './task.jsx';
/*
 define root component
*/
export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter : "",
    };
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeFilter(event) {
    this.setState( { filter : event.target.value } );
  }

  render() {
    const time = this.props.todo
      .reduce((previous, current) => previous + current.duration, 0);
    const task = this.props.todo
    .filter((task) => task.description.includes(this.state.filter))
    .sort((task1, task2) => task1.priority < task2.priority)
    .map ( task => <Task
      { ...task }
      { ...this.props }
      key = { task.id }
      taskPriority={this.props.taskPriority.bind(this)}
      /> );
    const filter = (
      <div>
        <input type="text" className="filtre" id="filtre"
                           value={ this.state.filter }
                           onChange = { this.handleChangeFilter }
        />
       </div>
    );
    return (
      <div className="todo">
        {filter}
        il y a { this.props.todo.length } taches en cours. Pour une durée de {time} minutes
        { task }
      </div>
    );
  }
}
