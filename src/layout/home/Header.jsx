import React, { Component } from 'react';
import HeaderTop from './headerTop';
import ShopMenu from './shopmenu';
import TopMenu from './topmenu';
// import NewHeader from './NewHeader';

// import  NavBAr  from './NavBAr';




export default class Header extends Component {
  render() {
    return (
      <div> 

      <HeaderTop/>
      {/* <NewHeader/> */}
     {/* < NavBAr/> */}
      <ShopMenu/>
      <TopMenu/>

       </div>
    );
  }
}

