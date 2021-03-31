import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pricetable extends Component {
    render() {
        return (
            <main>
            <section class="container stylization maincont">
            {/* <div container stylization maincont> */}
                <div class="pricing-wrap">
            <h3 class="component-ttl component-ttl-ct component-ttl-hasdesc"><span>Pricing Tables</span></h3>
            <p class="component-desc component-desc-ct">Quod soluta corrupti earum officia vel inventore vitae quidem</p>
            <div class="row pricing-list">
                <div class="col-sm-4 pricing-i">
                    <div class="pricing-i-top">
                        <h3 class="pricing-i-ttl">Start</h3>
                        <p class="pricing-i-subttl">Tempora ea ratione vel nisi qui</p>
                    </div>
                    <p class="pricing-i-price">$3.95</p>
                    <ul class="pricing-i-desc">
                        <li>5GB Disk Space</li>
                        <li>15 Email Addresses</li>
                        <li class="pricing-i-no"><del>50 Subdomains</del></li>
                        <li class="pricing-i-no"><del>Included Domains</del></li>
                        <li class="pricing-i-no"><del>Marketing offers</del></li>
                        <li class="pricing-i-no"><del>Support</del></li>
                        <li class="pricing-i-order"> <Link  to="#">Order now </Link></li>
                    </ul>
                </div>
                <div class="col-sm-4 pricing-i pricing-i-marked">
                    <div class="pricing-i-top">
                        <h3 class="pricing-i-ttl">Premium</h3>
                        <p class="pricing-i-subttl">Esse doloremque consec tetur eaque</p>
                    </div>
                    <p class="pricing-i-price">$14.99</p>
                    <ul class="pricing-i-desc">
                        <li>100GB Disk Space</li>
                        <li>1500 Email Addresses</li>
                        <li>Unlimeted Subdomains</li>
                        <li>Unlimeted Domains</li>
                        <li>Marketing offers $200</li>
                        <li>Support</li>
                        <li class="pricing-i-order"> <Link  to="#">Order now </Link></li>
                    </ul>
                </div>
                <div class="col-sm-4 pricing-i">
                    <div class="pricing-i-top">
                        <h3 class="pricing-i-ttl">Standart</h3>
                        <p class="pricing-i-subttl">Nemo impedit vitae alias accusamus</p>
                    </div>
                    <p class="pricing-i-price">$5.95</p>
                    <ul class="pricing-i-desc">
                        <li>30GB Disk Space</li>
                        <li>300 Email Addresses</li>
                        <li>50 Subdomains</li>
                        <li>3 Included Domains</li>
                        <li class="pricing-i-no"><del>Marketing offers</del></li>
                        <li class="pricing-i-no"><del>Support</del></li>
                        <li class="pricing-i-order"> <Link  to="#">Order now </Link></li>
                    </ul>
                </div>
            </div>
            
        </div>

         
            </section>
            </main>
        );
    }
}

export default Pricetable;