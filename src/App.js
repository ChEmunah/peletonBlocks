import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'

class App extends Component {
  constructor(props){
  this.state={
    seenPage:null
  }
}

  render() {
    return <Home/>
  }
}

export default App;
