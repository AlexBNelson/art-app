import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import ImagePane from '../Article/ImagePane.js';
import TextPane from '../Article/TextPane.js';


class Article extends Component {

    render() {
        return (
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-6 image-pane">
                        <ImagePane/>
                    </div>
                    <div class="col-6">
                        <TextPane/>
                    </div>

                </div>
            </div>

        );
    }
}

export default Article;