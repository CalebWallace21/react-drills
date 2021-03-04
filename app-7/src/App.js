import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo";
import List from "./List";
import NewTask from "./NewTask";
class App extends Component {
  constructor(){
    super();
    this.state = {
      todoArray: [],
      userInput: ''
    }
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  assignTodo(userInput){
    const {todoArray} = this.state;
    let arr = todoArray.slice();
    arr.push(userInput)    
    this.setState({todoArray: arr});
  }
  
  
render(){

  return (
    <div>
      <h1>My to-do list:</h1>
      <NewTask add={this.state.assignTodo} />
      <List tasks={this.itemsDisplay} />      
    </div>
  )
}






}

export default App;