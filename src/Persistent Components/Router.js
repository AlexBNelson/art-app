import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import  InDepth from '../Components/InDepth.js'
import App from '../App.js';

class Router extends Component {
    render() {
        return (

            <Locations>
                <Location path="/" handler={App} />
                <Location path="/InDepth" handler={InDepth} />
            </Locations>

        );
    }
}

export default Router;