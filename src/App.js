import React, { Component } from 'react';
import Home from './layout/home/Home';
import MainWishList from "./layout/wishlist/MainWishList";
import Maincompare from "./layout/compare/Maincompare";
import Mainlog from "./layout/login/Mainlog";
import Cart from "./layout/cart/Maincart";
import  Cataloglist from "./layout/catalog/cataloglist";
import  Mainelement from "./layout/element/Mainelement";
import Mainproduct from "./layout/product/Mainproduct";
import Maincontact  from "./layout/contact/Maincontact";
import Mainblog from "./layout/blog/Mainblog";
import  Gellery from "./layout/catalog/Gellery";
import './App.css';





import {  Switch, Route, BrowserRouter as Router } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>

        <Router>

          <Switch>
           <Route path='/wishlist'> <MainWishList/></Route>
           <Route path='/compare'> <Maincompare/></Route>
           <Route path='/login'> <Mainlog/></Route>
           <Route path='/cart'> <Cart/></Route>
           <Route path='/cataloglist'> <Cataloglist/></Route>
           <Route path='/element'> <Mainelement/></Route>
           <Route path='/mainproduct'> <Mainproduct/></Route>
           <Route path='/Maincontact'> <Maincontact/></Route>
           <Route path='/Mainblog'> <Mainblog/></Route>
           <Route path='/Gallery'> <Gellery/></Route>


           <Route exact path ='/' render={() => <Home/>}/>
            {/* <Route path='/'> <Home /></Route> */}

          </Switch>

        </Router>



      </>
    );
  }
}

