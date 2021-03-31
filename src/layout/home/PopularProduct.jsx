import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PopularProduct extends Component {
  render() {
    return (
        <main>
        <section class="container">
     
      <div class="fr-pop-wrap">

<h3 class="component-ttl"><span>Popular products</span></h3>

<ul class="fr-pop-tabs sections-show">
    <li><Link data-frpoptab-num="1" data-frpoptab="#frpoptab-tab-1"  to="#" class="active">All Categories</Link></li>
    <li><Link data-frpoptab-num="2" data-frpoptab="#frpoptab-tab-2"  to="#">Women</Link></li>
    <li><Link data-frpoptab-num="3" data-frpoptab="#frpoptab-tab-3"  to="#">Men</Link></li>
    <li><Link data-frpoptab-num="4" data-frpoptab="#frpoptab-tab-4"  to="#">Kids</Link></li>
    <li><Link data-frpoptab-num="5" data-frpoptab="#frpoptab-tab-5"  to="#">Shoes</Link></li>
</ul>

<div class="fr-pop-tab-cont">

    <p data-frpoptab-num="1" class="fr-pop-tab-mob active" data-frpoptab="#frpoptab-tab-1">All Categories</p>
    <div class="flexslider prod-items fr-pop-tab" id="frpoptab-tab-1">

        <ul class="slides">

            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/11.jpg" alt="Aspernatur excepturi rem"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Aspernatur excepturi rem</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$90</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active">
                        <img src="../assets/img/color/red.jpg" alt="Red"/></li>
                        <li><img src="../assets/img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/21.jpg" alt="Aperiam tempore"/
                    ></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Aperiam tempore</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$75</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/31.jpg" alt="Blanditiis eaque"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Blanditiis eaque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$115</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/41.jpg" alt="Excepturi ducimus"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Excepturi ducimus</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$105</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/51.jpg" alt="Sit recusandae voluptas"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-1">NEW</p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Sit recusandae voluptas</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$200</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/61.jpg" alt="Consequuntur minus atque"/>

                    </Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Consequuntur minus atque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$160</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/71.jpg" alt="Nostrum nihil ipsa"/>
                    
                    </Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nostrum nihil ipsa</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$140</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/81.jpg" alt="Non ex sapiente deserunt"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-3">-30%</p><p class="prod-sticker-4 countdown" data-date="29 Jan 2017, 14:30:00"></p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Non ex sapiente deserunt</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$65</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/91.jpg" alt="Amet tempore unde"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Amet tempore unde</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$85</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/women/101.jpg" alt="Neque fugiat voluptates"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Neque fugiat voluptates</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$120</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/11.jpg" alt="Amet tempore unde"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Amet tempore unde</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$165</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/21.jpg" alt="Perspiciatis dolor"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Perspiciatis dolor</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$205</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active">
                        <img src="img/color/red.jpg" alt="Red"/></li>
                        <li><img src="img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/31.jpg" alt="Veritatis officiis quae"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Veritatis officiis quae</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$90</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/41.jpg" alt="Fuga numquam obcaecati"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Fuga numquam obcaecati</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$65</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/51.jpg" alt="Ratione magni"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Ratione magni</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$125</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img"
                    ><img src="../assets/img/popularproduct/men/61.jpg" alt="Asperiores sit sequi"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Asperiores sit sequi</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$140</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/71.jpg" alt="Repudiandae accusamus"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Repudiandae accusamus</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$95</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/81.jpg" alt="Quod praesentium illum"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Quod praesentium illum</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$80</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/91.jpg" alt="Deleniti ut earum"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Deleniti ut earum</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$220</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/men/101.jpg" alt="Voluptatem quibusdam"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Voluptatem quibusdam</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$185</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/kids/11.jpg" alt="Nisi provident atque"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nisi provident atque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$130</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/kids/21.jpg" alt="Eveniet nobis minus possimus"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-1">NEW</p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Eveniet nobis minus possimus</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$80</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/kids/31.jpg" alt="Quis ex fugiat blanditiis"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Quis ex fugiat blanditiis</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$150</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active">
                        <img src="img/color/red.jpg" alt="Red"/></li>
                        <li><img src="img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/kids/41.jpg" alt="Nisi autem error"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nisi autem error</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$65</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/kids/51.jpg" alt="Quod soluta corrupti"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Quod soluta corrupti</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$175</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/kids/61.jpg" alt="Ipsa doloremque"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Ipsa doloremque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$85</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/shoes/11.jpg" alt="Dignissimos fuga"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Dignissimos fuga</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$205</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/shoes/21.jpg" alt="Nisi autem error"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nisi autem error</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$95</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active">
                        <img src="../assets/img/color/red.jpg" alt="Red"/></li>
                        <li><img src="../assets/img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/shoes/31.jpg" alt="Tempora ea ratione vel"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="qview-btn prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-2">HIT</p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Tempora ea ratione vel</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$120</b>
                </p>
            </li>
        
        </ul>

    </div>

    <p data-frpoptab-num="2" class="fr-pop-tab-mob" data-frpoptab="#frpoptab-tab-2">Kids</p>
    <div class="flexslider prod-items fr-pop-tab" id="frpoptab-tab-2">

        <ul class="slides">

            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x350" alt="Aspernatur excepturi rem"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Aspernatur excepturi rem</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$90</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active">
                        <img src="img/color/red.jpg" alt="Red"/></li>
                        <li><img src="../assets/img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/277x250" alt="Aperiam tempore"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Aperiam tempore</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$75</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x324" alt="Blanditiis eaque"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Blanditiis eaque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$115</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x500" alt="Excepturi ducimus"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Excepturi ducimus</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$105</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/329x250" alt="Sit recusandae voluptas"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-1">NEW</p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Sit recusandae voluptas</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$200</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x317" alt="Consequuntur minus atque"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Consequuntur minus atque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$160</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x329" alt="Nostrum nihil ipsa"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nostrum nihil ipsa</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$140</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x361" alt="Non ex sapiente deserunt"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-3">-30%</p><p class="prod-sticker-4 countdown" data-date="29 Jan 2017, 14:30:00"></p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Non ex sapiente deserunt</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$65</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x361" alt="Amet tempore unde"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Amet tempore unde</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$85</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x361" alt="Neque fugiat voluptates"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Neque fugiat voluptates</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$120</b>
                </p>
            </li>

        </ul>
    </div>

    <p data-frpoptab-num="3" class="fr-pop-tab-mob" data-frpoptab="#frpoptab-tab-3">Women</p>
    <div class="flexslider prod-items fr-pop-tab" id="frpoptab-tab-3">

        <ul class="slides">

            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x302" alt="Amet tempore unde"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Amet tempore unde</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$165</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x327" alt="Perspiciatis dolor"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Perspiciatis dolor</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$205</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active"><img src="../assets/img/color/red.jpg" alt="Red"/></li>
                        <li><img src="../assets/img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x262" alt="Veritatis officiis quae"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Veritatis officiis quae</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$90</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x292" alt="Fuga numquam obcaecati"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Fuga numquam obcaecati</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$65</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x351" alt="Ratione magni"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Ratione magni</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$125</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x301" alt="Asperiores sit sequi"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Asperiores sit sequi</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$140</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x322" alt="Repudiandae accusamus"/>

                    </Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Repudiandae accusamus</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$95</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x266" alt="Quod praesentium illum"/>

                    </Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Quod praesentium illum</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$80</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x301" alt="Deleniti ut earum"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Deleniti ut earum</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$220</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x362" alt="Voluptatem quibusdam"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Voluptatem quibusdam</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$185</b>
                </p>
            </li>

        </ul>
    </div>

    <p data-frpoptab-num="4" class="fr-pop-tab-mob" data-frpoptab="#frpoptab-tab-4">Men</p>
    <div class="flexslider prod-items fr-pop-tab" id="frpoptab-tab-4">

        <ul class="slides">

            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x422" alt="Nisi provident atque"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nisi provident atque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$130</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                   
                    <img src="http://placehold.it/250x385" alt="Eveniet nobis minus possimus"/>
                    </Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-1">NEW</p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Eveniet nobis minus possimus</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$80</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x288" alt="Quis ex fugiat blanditiis"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Quis ex fugiat blanditiis</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$150</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active"><img src="img/color/red.jpg" alt="Red"/></li>
                        <li><img src="img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x279" alt="Nisi autem error"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nisi autem error</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$65</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x403" alt="Quod soluta corrupti"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Quod soluta corrupti</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$175</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x280" alt="Ipsa doloremque"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Ipsa doloremque</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$85</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/250x409" alt="Dignissimos fuga"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Dignissimos fuga</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$205</b>
                </p>
            </li>

        </ul>

    </div>


    <p data-frpoptab-num="5" class="fr-pop-tab-mob" data-frpoptab="#frpoptab-tab-5">Shoes</p>
    <div class="flexslider prod-items fr-pop-tab" id="frpoptab-tab-5">

        <ul class="slides">

            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/shoes/11.jpg" alt="Nisi autem error"/>
                    </Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Go to detail</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Nisi autem error</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$95</b>
                </p>
                <div class="prod-i-skuwrapcolor">
                    <ul class="prod-i-skucolor">
                        <li class="bx_active"><img src="../assets/img/color/red.jpg" alt="Red"/></li>
                        <li><img src="../assets/img/color/blue.jpg" alt="Blue"/></li>
                    </ul>
                </div>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/shoes/21.jpg" alt="Tempora ea ratione vel"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>

                    <div class="prod-sticker">
                        <p class="prod-sticker-2">HIT</p>
                    </div>
                </div>
                <h3>
                    <Link  to="product.html">Tempora ea ratione vel</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$120</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/shoes/31.jpg" alt="Minus sequi iste"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Minus sequi iste</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$135</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="../assets/img/popularproduct/shoes/11.jpg" alt="Dignissimos fuga voluptates totam"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Dignissimos fuga voluptates totam</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$85</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/291x250" alt="Perferendis recusandae"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Perferendis recusandae</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$70</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/277x250" alt="Officiis nihil culpa"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Officiis nihil culpa</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$180</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/295x250" alt="Distinctio modi quos"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Distinctio modi quos</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$195</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img">
                    <img src="http://placehold.it/301x250" alt="Corrupti velit vero"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Corrupti velit vero</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$220</b>
                </p>
            </li>
            <li class="prod-i">
                <div class="prod-i-top">
                    <Link  to="product.html" class="prod-i-img"><img src="http://placehold.it/289x250" alt="Dicta doloremque hic"/></Link>
                    <p class="prod-i-info">
                        <Link  to="#" class="prod-i-favorites"><span>Wishlist</span><i class="fa fa-heart"></i></Link>
                        <Link  to="#" class="prod-i-qview"><span>Quick View</span><i class="fa fa-search"></i></Link>
                        <Link class="prod-i-compare"  to="#"><span>Compare</span><i class="fa fa-bar-chart"></i></Link>
                    </p>
                    <p class="prod-i-addwrap">
                        <Link  to="#" class="prod-i-add">Add to cart</Link>
                    </p>
                </div>
                <h3>
                    <Link  to="product.html">Dicta doloremque hic</Link>
                </h3>
                <p class="prod-i-price">
                    <b>$90</b>
                </p>
            </li>

        </ul>

    </div>


</div>
</div>


      </section>
       </main>

    );
  }
}
