import React, { Component } from 'react';
import Home from './layout/home/Home';
import MainWishList from "./layout/wishlist/MainWishList";
import { Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>

        <Router>

          <Switch>
           <Route path='/wishlist'> <MainWishList/></Route>

  {/*  <Route path='/about'> <About /></Route>
  <Route path='/android'> < Android /> </Route>
  <Route path='/ios'> < Ios /> </Route>
  <Route path='/mobicare'><Mobicare /></Route> */}

            <Route path='/'> <Home /></Route>

          </Switch>

        </Router>



      </>
    );
  }
}

