import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';


class InDepth extends Component {

    render() {
        return (
            <div class="card-columns">
                <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Article 1</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
  </div>
                    <div class="card">
                            <div class="card-body">
                        <h5 class="card-title">Article 2</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
  </div>
                        
                        <div class="card text-center">
                            <div class="card-body">
                        <h5 class="card-title">Article 3</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                            <div class="card p-3 text-right">
                                <blockquote class="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer class="blockquote-footer">
                                        <small class="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div class="card">
                                <div class="card-body">
                        <h5 class="card-title">Article 4</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
        );
    }
}

export default InDepth;