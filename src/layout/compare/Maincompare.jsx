import React, { Component } from 'react';
import Content from './content';
import Header from '../home/Header';
import loadjs from 'loadjs';
import Footer from '../home/Footer';


export default class Maincompare  extends Component {
componentDidMount()
{
  loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
}
  render() {
    return (
      <div> 
       <Header/>
      <Content/>
      <Footer/>
      
      
      </div>
    );
  }
}
