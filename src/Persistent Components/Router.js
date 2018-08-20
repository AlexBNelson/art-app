import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import  InDepth from '../Components/InDepth.js'
import App from '../App.js';
import  Home from '../Components/Home.js'
import NavHead from './NavHead.js';


const HomePage = () => (
    <div>
    <NavHead />
        <Home />
        </div>
);

const InDepthPage = () => (
    <div>
    <NavHead />
        <InDepth />
        </div>

);

class Router extends Component {
    
    render() {
        return (
            

            <Locations>
                <Location path="/" handler={HomePage} />
                <Location path="/InDepth" handler={InDepthPage} />
            </Locations>

        );
    }
}

export default Router;