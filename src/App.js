import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'usek';
    return (
      <div>
        <p>Hello! {name.toUpperCase()}</p>
        <div className='box'/>
        <p>aiee</p>
      </div>
    );
  }
}

export default App;
