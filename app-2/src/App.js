import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arrayList: ['cheese', 'bologna', 'sushi', 'ice cream', 'spaghetti']
    }
  }

render(){
  let itemsDisplay = this.state.arrayList.map((element, index) => {
    return <h1>{this.state.arrayList[element, index]}</h1>
  })
  return (
    <div> {itemsDisplay} </div>
  )
}

}

export default App;
