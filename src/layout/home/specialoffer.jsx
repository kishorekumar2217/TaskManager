import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SpecialOffer extends Component {
  render() {
    return (
      <div class="container"> 
      
      <div class="discounts-wrap">
            <h3 class="component-ttl"><span>Special offer</span></h3>
            <div class="flexslider discounts-list">
                <ul class="slides">
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/1.jpg" alt="Dicta doloremque"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Dicta doloremque</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$115</b> <del>$135</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/2.jpg" alt="Similique delectus"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Similique delectus</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$105</b> <del>$120</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/3.jpg" alt="Adipisci nemo"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Adipisci nemo</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$70</b> <del>$90</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/4.jpg" alt="Ullam harum"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Ullam harum</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$55</b> <del>$75</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/5.jpg" alt="Similique delectus"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Similique delectus</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$135</b> <del>$155</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/6.jpg" alt="Туфли Dr.Koffer"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Туфли Dr.Koffer</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$190</b> <del>$210</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/7.jpg" alt="Quod consequatur"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Quod consequatur</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$120</b> <del>$140</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <Link  to="product.html" class="discounts-i-img">
                            <img src="../assets/img/specialoffer/8.jpg" alt="Dolore fugit"/>
                        </Link>
                        <h3 class="discounts-i-ttl">
                            <Link  to="product.html">Dolore fugit</Link>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$80</b> <del>$95</del>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="discounts-info">
                <p>Special offer!<br/>Limited time only</p>
                <Link  to="catalog-list.html">Shop now</Link>
            </div>
        </div>
       </div>
    );
  }
}
