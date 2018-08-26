
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import '../bootstrap.css';
import '../App.css';
import { Link } from 'react-router-component';

class NavHead extends Component {
    render() {
        return (
            <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light NavHead">
    <a class="navbar-brand" href="#">Website</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                                <Link class="nav-link" href="/">Home</Link>
                            </li>
            <li class="nav-item">
                <a class="nav-link" href="/InDepth">InDepth</a>
                            </li>
            <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
        </a>
                   <div class="dropdown-menu" onClick={this.toggleOpen} aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
  </div>
                </nav>
                </div>
                );
  }
}

export default NavHead;
