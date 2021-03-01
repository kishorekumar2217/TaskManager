import React, { Component } from 'react';

export default class SpecialOffer extends Component {
  render() {
    return (
      <div class="container"> 
      
      <div class="discounts-wrap">
            <h3 class="component-ttl"><span>Special offer</span></h3>
            <div class="flexslider discounts-list">
                <ul class="slides">
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/120x120" alt="Dicta doloremque"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Dicta doloremque</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$115</b> <del>$135</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/99x120" alt="Similique delectus"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Similique delectus</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$105</b> <del>$120</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/75x120" alt="Adipisci nemo"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Adipisci nemo</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$70</b> <del>$90</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/65x120" alt="Ullam harum"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Ullam harum</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$55</b> <del>$75</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/78x120" alt="Similique delectus"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Similique delectus</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$135</b> <del>$155</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/81x120" alt="Туфли Dr.Koffer"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Туфли Dr.Koffer</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$190</b> <del>$210</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/117x120" alt="Quod consequatur"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Quod consequatur</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$120</b> <del>$140</del>
                        </p>
                    </li>
                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src="http://placehold.it/80x120" alt="Dolore fugit"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">Dolore fugit</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>$80</b> <del>$95</del>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="discounts-info">
                <p>Special offer!<br/>Limited time only</p>
                <a href="catalog-list.html">Shop now</a>
            </div>
        </div>
       </div>
    );
  }
}
