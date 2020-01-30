import React, {component} from 'react'
import './App.css'
import NewTask from './NewTask'
import List from './List'

class App extends component{
  constructor(){
    super();

    this.state = {
      list: []
    };
    this.handleAddTask = this.handleAddTask.bind(this)
  } 
  handleAddTask(task){
    this.setState({ list: [...this.state.list, task] });
  }

    render(){
      return (
        <div className="App">
          <h1>My To-Do List</h1>
          <NewTask add={this.handleAddTask}/>
          <List Tasks={this.state.list}/>
        </div>
      )
    }
}
 export default App
