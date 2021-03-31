import React, { Component } from 'react';
import Header from './Header';
import Main from './main';
import Footer from './Footer';
import loadjs from 'loadjs';




export default class Home extends Component {
  componentDidMount(){
   
    loadjs(['../assets/js/plugins.js','../assets/js/main.js','../assets/js/gmap.js']);
 }

  render() {

    return (

      <div> 

      <Header/>
      <Main/>
      <Footer/>
    
       </div>
    );
  }
}

