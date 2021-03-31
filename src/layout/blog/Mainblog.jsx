import React, { Component } from 'react';
import Blog from './blog';
import Header from '../home/Header';
import loadjs from 'loadjs';
import Footer from '../home/Footer';
class Mainblog extends Component {
    componentDidMount(){

        loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
    }
    render() {
        return (
            <div>
            <Header/>
               <Blog/> 
               <Footer/>
            </div>
        );
    }
}

export default Mainblog;