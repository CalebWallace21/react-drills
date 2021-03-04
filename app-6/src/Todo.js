import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {
  constructor(){
    super();    
    }
    
  

render(){
  return (
    <h1>{this.props.task}</h1>
  )
}
}

export default Todo;