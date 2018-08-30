import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import ArticlePane from '../Article/ArticlePane.js';
import TitlePane from '../Article/TitlePane';
import './Article.css';


class Article extends Component {

    constructor(props) {
        super(props);
        this.state = { articleState: props.articleState };
    }

    render() {
        if (this.state.articleState == "title") {
            return (

                <div>
                    <TitlePane />
                </div>)
        }
        else {
            return (
                <div>
                    <ArticlePane />
                </div>)
        }
    }
}

export default Article;