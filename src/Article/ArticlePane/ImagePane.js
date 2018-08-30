import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Bootstrap from 'bootstrap';
import '../../bootstrap.css';
import '../../Components/Article.css';
import ImageDetailsPane from './ImagePane/ImageDetailsPane.js';


class ImagePane extends Component {

    render() {
        return (
            <div class="article-image-pane">
                <div class="image-details-pane  navbar-light bg-light">
                    <ImageDetailsPane />
                </div>

                <img class="article-image-pane-img" src="http://localhost:58282/featuredArticle1" />
            </div>

        );
    }
}

export default ImagePane;