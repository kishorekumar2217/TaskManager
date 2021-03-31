import React, { Component } from 'react';


class PercentCounters extends Component {
    render() {
        return (
            <main>
            <section class="container stylization maincont">
            {/* <div class="container stylization maincont"> */}
                <div class="facts-wrap style-2">
            <h3 class="component-ttl component-ttl-ct"><span>Percent Counters</span></h3>
            <div class="row facts-list">
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p id="facts-i-percent-1" data-num="0.99" class="facts-i-percent"></p>
                    <h3 class="facts-i-ttl">Happy clients</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    <span class="facts-i-margin"></span>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p id="facts-i-percent-2" data-num="0.85" class="facts-i-percent"></p>
                    <h3 class="facts-i-ttl">Repeat orders</h3>
                    Deleniti alias consequuntur error neque doloribus sed harum
                    <span class="facts-i-margin"></span>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p id="facts-i-percent-3" data-num="1" class="facts-i-percent"></p>
                    <h3 class="facts-i-ttl">Quality of work</h3>
                    Officia sit nesciunt laborum maiores harum, amet quod necess
                    <span class="facts-i-margin"></span>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-md-4 cf-lg-3 col-xs-6 col-sm-4 col-lg-3 facts-i">
                    <p id="facts-i-percent-4" data-num="0.7" class="facts-i-percent"></p>
                    <h3 class="facts-i-ttl">Through recommendations</h3>
                    Blanditiis assumenda, quaerat eos fugit impedit hic facere
                    <span class="facts-i-margin"></span>
                </div>
            </div>
            </div>
            </section>
            </main>
        );
    }
}




export default PercentCounters;