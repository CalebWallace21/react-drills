import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo";

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
  let itemsDisplay = this.state.todoArray.map((element, index) => {
    return <h1>{this.state.todoArray[element, index]}</h1>
  })
  return (
    <div>
      <h1>My to-do list:</h1>
      <input placeholder="Enter new task" onChange={ (e) => this.handleChange(e.target.value)}/>
      <button className="confirmationButton" onClick={ () => this.assignTodo(this.state.userInput)}>Add</button>
      <p>{itemsDisplay}</p>
    </div>
  )
}






}

export default App;