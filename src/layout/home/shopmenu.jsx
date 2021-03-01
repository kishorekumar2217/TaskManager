import React, { Component } from 'react';
import { Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

export default class ShopMenu extends Component {
  render() {
    return (
        <div class="header-middle">
        <div class="container header-middle-cont">
            <div class="toplogo">
                <a href="index.html">
                    <img src="../assets/img/logo.png" alt="AllStore - MultiConcept eCommerce Template"/>
                </a>
            </div>
            <div class="shop-menu">
                <ul>

                    <li>
                        <Link to="/wishlist">
                            <i class="fa fa-heart"></i>
                            <span class="shop-menu-ttl">Wishlist</span>
                            (<span id="topbar-favorites">1</span>)
                        </Link>
                    </li>

                    <li>
                        <a href="compare.html">
                            <i class="fa fa-bar-chart"></i>
                            <span class="shop-menu-ttl">Compare</span> (5)
                        </a>
                    </li>

                    <li class="topauth">
                        <a href="auth.html">
                            <i class="fa fa-lock"></i>
                            <span class="shop-menu-ttl">Registration</span>
                        </a>
                        <a href="auth.html">
                            <span class="shop-menu-ttl">Login</span>
                        </a>
                    </li>

                    <li>
                        <div class="h-cart">
                            <a href="cart.html">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="shop-menu-ttl">Cart</span>
                                (<b>0</b>)
                            </a>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    );
  }
}
