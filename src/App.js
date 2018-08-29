import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavHead from './Persistent Components/NavHead.js';
import Router from './Persistent Components/Router.js'

class App extends Component {

    setMainPane(prop){
        this.mainPane = prop;
      }
        
    render() {

      return (
          
          <div className="App">
          </div>

    );
  }
}

export default App;
