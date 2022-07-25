import React from 'react';

import PropTypes from 'prop-types';
import PriorityScale from "./priorityScale.jsx";

import '../assets/style/task.css';


/*
 define root component
*/
export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  key : this.props.id,
                  description : this.props.description,
                  duration : this.props.duration,
                  priority : "priority",
                  done : false
                };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState( (prevstate) => ( { done : ! prevstate.done } ) );
    this.props.addDone(this.props);
  }

  changePriority(newPriority) {
    this.props.taskPriority(this.props.id, newPriority.target.id);
  }

  buildTask(){
    if (this.state.done) {
      return null
    }
    else {
      const task =
      <div className = "task">
        <div className = "description"><span>{ this.state.description }</span> </div>
        <div className = "duration"><span>{ this.state.duration }</span> </div>
        <div className = "priority"><span>{ this.state.priority }</span> </div>
        <PriorityScale
        priority={this.props.priority}
        changePriority={this.changePriority.bind(this)}
        />
        <button onClick ={ this.handleClick }>done</button>
      </div>
      return task;
    }
  }

  render() {
    return (
        <div>
           { this.buildTask() }
        </div>
       );
  }
}
