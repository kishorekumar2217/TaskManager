import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div class="container stylization maincont">
                   <div class="facts-wrap">
            <h3 class="component-ttl component-ttl-ct"><span>Counters</span></h3>
            <div class="row facts-list">
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p data-num="167" class="facts-i-num">167</p>
                    <h3 class="facts-i-ttl">Happy clients</h3>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p data-num="34" class="facts-i-num">34</p>
                    <h3 class="facts-i-ttl">Portfolio projects</h3>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p data-num="127" class="facts-i-num">127</p>
                    <h3 class="facts-i-ttl">Cup of coffee</h3>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p data-num="258" class="facts-i-num">258</p>
                    <h3 class="facts-i-ttl">Lines of code</h3>
                </div>
            </div>
        </div>
        <br/>

            </div>
        );
    }
}

export default Counter;