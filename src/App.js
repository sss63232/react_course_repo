import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var app ={
      title:`Indecision App`,
      subtitle: `~~~~~~~~~~`,
      options:[`one`,`two`]
    };

    let btnID = `BTN`;
    return (
      <div>
        {app.subtitle && <p id="testID">{app.subtitle}</p>}
        <button id={btnID} onClick={e=>{
          console.log('--------');
          console.log(e.target);
          console.log('--------');
        }}>-1</button>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

    );
  }
}

export default App;
