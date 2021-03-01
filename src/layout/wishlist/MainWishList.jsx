import React, { Component } from 'react';
import NavigationBar from './navigationbar';
import HeaderTop from '../home/headerTop';
import ShopMenu from '../home/shopmenu';
import TopMenu from '../home/topmenu';
import WishList from './wishlist';
import Bottom from '../home/bottom';


export default class MainWishList extends Component {
  render() {
    return (
      <div> 

      <HeaderTop/>
      <ShopMenu/>
      <TopMenu/>

      <NavigationBar/>
      <WishList/>
<Bottom/>




      
       </div>
    );
  }
}
