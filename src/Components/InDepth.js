import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';


class InDepth extends Component {

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <img src="http://localhost:58282/featuredArticle"/>
                    </div>
                
                </div>
            </div>

        );
    }

    GetFeaturedArticleImage() {

            axios.get('http://localhost:58282/featuredArticle')
            .then(function (response) {
                return (response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export default InDepth;