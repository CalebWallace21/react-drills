import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NewTask extends Component {
  constructor(){
    super();
    this.state = {
        todoArray:[],
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
    <input placeholder="Enter new task" onChange={ (e) => this.handleChange(e.target.value)}/>
    <button className="confirmationButton" onClick={ () => this.assignTodo(this.state.userInput)}>Add</button>
    </div>
  )
}
}

export default NewTask;