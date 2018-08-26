import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';


class InDepth extends Component {

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 featured-article-container">
                        <img class="featured-article-image img-responsive" src="http://localhost:58282/featuredArticle"/>
                    </div>
                
                </div>
                <div class="row">
                    <div class="col-12 featured-article-container">
                        <img class="featured-article-image img-responsive" src="http://localhost:58282/featuredArticle" />
                    </div>

                </div>
                <div class="row">
                    <div class="col-12 featured-article-container">
                        <h3 class="featured-article-title"> Article</h3>
                        <img class="img-responsive mx-auto d-block featured-article-image" src="http://localhost:58282/featuredArticle" />
                    </div>

                </div>
            </div>

        );
    }
}

export default InDepth;