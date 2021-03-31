import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShopMenu extends Component {
  render() {
    return (
       <div> 
  <header className="header">
    <div className="header-middle">
      <div className="container header-middle-cont">
        <div className="toplogo">
          <Link to="/">
            <img src="../assets/img/logo.png" alt="AllStore - MultiConcept eCommerce Template" />
          </Link>
        </div>
        <div className="shop-menu">
          <ul>
            <li>
              <Link to="/wishlist">
                <i className="fa fa-heart" />
                <span className="shop-menu-ttl">Wishlist</span>
                (<span id="topbar-favorites">1</span>)
              </Link>
            </li>
            <li>
              <Link to="/compare">
                <i className="fa fa-bar-chart" />
                <span className="shop-menu-ttl">Compare</span> (5)
              </Link>
            </li>
            <li className="topauth">
              <Link to="/login">
                <i className="fa fa-lock" />
                <span className="shop-menu-ttl">Registration</span>
              </Link>
               <Link to="/login">
                <span className="shop-menu-ttl">Login</span>
              </Link> 
            </li>
            <li>
              <div className="h-cart">
                <Link to="/cart">
                  <i className="fa fa-shopping-cart" />
                  <span className="shop-menu-ttl">Cart</span>
                  (<b>0</b>)
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</div>

    );
  }
}
