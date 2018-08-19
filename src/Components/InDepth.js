import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import { NavHead } from '../Persistent Components/NavHead';
import App from '../App';

function InDepth() {
    App.setMainPane((<div>InDepth</div>))
    App.render()
    
};

export default InDepth;