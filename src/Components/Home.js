import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import { NavHead } from '../Persistent Components/NavHead'
import App from '../App';

function Home() {

    App.setMainPane((<div><header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
    </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p></div>))
}

export default Home;