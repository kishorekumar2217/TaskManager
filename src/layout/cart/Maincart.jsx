import React, { Component } from 'react';
import Header from '../home/Header';
import CartItem from './cartItem';
import Footer from '../home/Footer';
import loadjs from 'loadjs';

export default class Cart extends Component {
  componentDidMount(){
   
    loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
 }
  render() {

    return (
        <>
      <Header/>
      <CartItem/>
      <Footer/>

      </>
    );
  }
}
