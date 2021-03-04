import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  constructor(){
    super();    
    }
    
  

render(){
    let itemsDisplay = this.state.todoArray.map((element, index) => {
    return <h1>{this.state.todoArray[element, index]}</h1>
      })
  return (
    <div>{itemsDisplay}</div>
  )
}
}

export default List;