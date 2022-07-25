import React from 'react';

import '../assets/style/taskApp.css';
import AddTask from './addTask.jsx';
import ToDo from './toDo.jsx';
import Done from './done.jsx';

/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : [],
      done : []
    }
    this.addTask = this.addTask.bind(this);
    this.addDone = this.addDone.bind(this);
    this.taskPriority = this.taskPriority.bind(this);
  }

  render() {
    return (
      <div className="taskApp">
        <AddTask
          addTask = { this.addTask }
          todo = { this.state.todo }
        />
        <ToDo
          todo = { this.state.todo }
          done = { this.state.done }
          taskPriority = {this.taskPriority}
          addDone = { this.addDone }
        />
        <Done
          done = { this.state.done }
        />
      </div>
    );
  }

  addTask(task){
    const newId = `T${this.state.todo.length + 1}`;
    const newTask = { ...task, id : newId };
    this.setState ( prevState => ( { todo : [...prevState.todo, newTask] } ) );
  }

  taskPriority(id, newPriority) {
    const found = this.state.todo.find((task) => task.id === id);
    found.priority = parseInt(newPriority);
    this.setState({todo: this.state.todo});
  }

  addDone(taskD){
    let taskData = this.state.todo.find((task) => task.id === taskD.id);
    this.state.done.push(taskData);
    this.setState({ todo: this.state.todo.filter((task) => task != taskData)});
  }

  async componentDidMount() {
    const data = await simulateFetch('http://source.of.data/tasks');
    this.setState({ todo : data });
  }


}
import tasksData from '../data/tasksData.js';
const simulateFetch = async mockURL => {
    await setTimeout( () => console.log(`simulate fetching data from ${mockURL}`), 10);
    return tasksData;
}
