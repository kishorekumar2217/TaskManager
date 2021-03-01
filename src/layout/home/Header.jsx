import React, { Component } from 'react';
import HeaderTop from './headerTop';
import ShopMenu from './shopmenu';
import TopMenu from './topmenu';



export default class Header extends Component {
  render() {
    return (
      <div> 

      <HeaderTop/>
      <ShopMenu/>
      <TopMenu/>

       </div>
    );
  }
}

