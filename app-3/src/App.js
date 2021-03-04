import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      arrayList: ['cheese ', 'bologna ', 'sushi ', 'ice cream ', 'spaghetti ']
    }
  }
  handleChange(val){
    this.setState ({userInput: val});
  }

 
render(){
  let itemsDisplay = this.state.arrayList.filter((element)=> {
    return element.includes(this.state.userInput)
  })
  
  
  itemsDisplay.map((element, index) => {
    return this.state.arrayList[element, index]
  })
  return (
    <div>
    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
     <h1>{itemsDisplay}</h1>
     </div>
  )
}

}

export default App;
