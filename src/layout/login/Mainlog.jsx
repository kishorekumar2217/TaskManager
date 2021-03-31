import React, { Component } from 'react';
import Header from '../home/Header';
import Form from './form';
import Footer from '../home/Footer';
import  loadjs from 'loadjs';

export default class Mainlog extends Component {
  componentDidMount(){
    loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
  }
  render() {
    return (
      <div> 
      <Header/>

      <Form/>
      <Footer/>
      
       </div>
    );
  }
}
