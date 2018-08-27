import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';


class ImagePane extends Component {

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6 featured-article-title-box feature-article-div">
                        <img class="featured-article-image img-responsive" src="http://localhost:58282/featuredArticle1" />
                    </div>
                    <div class="col-6 featured-article-container feature-article-div">
                        <img class="featured-article-image img-responsive" src="http://localhost:58282/featuredArticle1" />
                    </div>

                </div>
            </div>

        );
    }
}

export default ImagePane;