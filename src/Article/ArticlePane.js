import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import '../Components/Article.css'
import ImagePane from './ArticlePane/ImagePane';
import TextPane from './ArticlePane/TextPane';


class ArticlePane extends Component {

    render() {
        return (
           
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
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

export default ArticlePane;