import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Iconbox extends Component {
    render() {
        return (
            <main>
            <section class="container stylization maincont">

            {/* <div class="container stylization maincont"> */}
                 <div class="iconbox-wrap">
            <h3 class="component-ttl component-ttl-ct"><span>Iconbox</span></h3>
            <div class="row iconbox-list">
                <div class="cf-xs-6 cf-sm-4 cf-lg-4 col-xs-6 col-sm-4 iconbox-i">
                    <p class="iconbox-i-img">/<img src="../assets/img/iconbox1.png" alt="Responsive Design"/></p>
                    <h3 class="iconbox-i-ttl">Responsive Design</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    <span class="iconbox-i-margin"></span>
                     <Link class="iconbox-i-link"  to="#">Read More <i class="fa fa-angle-right"></i> </Link>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-lg-4 col-xs-6 col-sm-4 iconbox-i">
                    <p class="iconbox-i-img"><img src="../assets/img/iconbox2.png" alt="Speed Optimized"/></p>
                    <h3 class="iconbox-i-ttl">Speed Optimized</h3>
                    Aliquam, dolor quae modi, voluptates aliquid, quasi voluptatum officiis inventore esse voluptas id nostrum corporis accusantium similique
                    <span class="iconbox-i-margin"></span>
                     <Link class="iconbox-i-link"  to="#">Read More <i class="fa fa-angle-right"></i> </Link>
                </div>
                <div class="cf-xs-6 cf-sm-4 cf-lg-4 col-xs-6 col-sm-4 iconbox-i">
                    <p class="iconbox-i-img"><img src="../assets/img/iconbox3.png" alt="Outstanding Support"/></p>
                    <h3 class="iconbox-i-ttl">Outstanding Support</h3>
                    Praesentium dolor necessitatibus suscipit, eum magni laborum quo qui ut officiis nihil, unde non sint consequatur ullam animi eveniet
                    <span class="iconbox-i-margin"></span>
                     <Link class="iconbox-i-link"  to="#">Read More <i class="fa fa-angle-right"></i> </Link>
                </div>
            </div>
        </div>
        {/* </div> */}

        </section>
        </main>

        );
    }
}

export default Iconbox;