import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHello from "./MyHello"

function showMessage() {
  alert("Hello");
}

class App extends Component {
  render() {
    const name = 'usek';
    return (
      <div>
        <p>Hello! {name.toUpperCase()}</p>
        <div className='box' onClick={showMessage}/>
        <p>aiee</p>
        <MyHello name={'UseK'}/>
      </div>
    );
  }
}

export default App;
