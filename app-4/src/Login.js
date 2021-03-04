import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      password: ''
    }
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
  }
handleChangeUsername(val){
  this.setState ({userName: val});
}
handleChangePassword(pass){
    this.setState ({password: pass});
  }
handleChangeLogin(){
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
}
render(){
  return (
    <div>
      <input className="userNameLine" onChange={ (e) => this.handleChangeUsername(e.target.value)}></input>
      <input className="passwordLine" onChange={ (e) => this.handleChangePassword(e.target.value)}></input>
      <button className="loginButton" onClick={this.handleChangeLogin}>Login</button>
    </div>
  )
}
}

export default Login;
