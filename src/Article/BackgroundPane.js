import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';


class BackgroundPane extends Component {

    render() {
        return (
            <div>
                <img class="article-background-pane" src="http://localhost:58282/articleBackground"/>
            </div>
        );
    }
}

export default BackgroundPane;