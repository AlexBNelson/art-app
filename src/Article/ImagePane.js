import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';


class ImagePane extends Component {

    render() {
        return (
            <div>
                <img src="http://localhost:58282/featuredArticle1" />
            </div>

        );
    }
}

export default ImagePane;