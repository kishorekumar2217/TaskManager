import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
  render() {
    return (
      <div  class="container"> 
      
      <ul class="b-crumbs">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <span>Wishlist</span>
            </li>
        </ul>
        <h1 class="main-ttl"><span>Wishlist</span></h1>
      
      
       </div>
    );
  }
}
