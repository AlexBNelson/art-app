import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from './Persistent Components/Router.js'


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
