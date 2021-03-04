import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }
handleChange(val){
  this.setState ({userInput: val});
}
render(){
  return (
    <div>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
      <p className='outputLine'>{this.state.userInput}</p>
    </div>
  )
}






}

export default App;
