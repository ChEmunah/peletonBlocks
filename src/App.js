import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: "",
      shape:""
    }
  }
  pickColor = (color) =>{
    this.setState({color: color},()=>console.log("color: ", this.state.color));

    

  }
render() {
  let colors = {blue:"#1653b7", green:"#22821b", red:"#3a3838", yello: "#eef209"};
  let shapes = ["triangle", "square", "halfCircle","rectangle"];
    return (
      <div className="App">
      {/* choos color */}
      <h1>בחר צבע</h1>
      <div className = {"colorPicker"}>
        {
          Object.keys(colors).map(item => {
            return <div onClick ={() => this.pickColor(colors[item])} 
            id = {`choosColor${item}`} 
            className = "choosColor"
            key = {item}
            ref = {`choosColor${item}`}
            style={{backgroundColor:colors[item]}}
            >{item} <span aria-hidden="true" data-icon="&#x25a8;"></span>
            </div>
          })
          
        }
      </div>
      {/* choos shape */}
      <h1>בחר צורה</h1>
      {
        // shape
      }

      </div>
    );
  }
}

export default App;
