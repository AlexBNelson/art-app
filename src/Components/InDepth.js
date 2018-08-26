import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios';


class InDepth extends Component {

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <this.GetFeaturedArticleImage/>
                    </div>
                
                </div>
            </div>

        );
    }

    GetFeaturedArticleImage() {

        this.featuredArticleImage = axios.get('/user?ID=12345')
            .then(function (response) {
                return (response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        return (<div>Hello</div>)
    }
}

export default InDepth;