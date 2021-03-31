import React, { Component } from 'react';
import Header from '../home/Header';
import Product from './Product';
import Footer from '../home/Footer';
import Description from './Description';
import ProductTab from './ProductTab';
 import Relatedproducts from './Relatedproducts';
import loadjs from 'loadjs';
class Mainproduct extends Component {

    render() {
        return (
            <div>
               <Header/>
               <Product/>
               {/* <Description/>  */}
              
               <Footer/> 
            </div>
        );
    }
}

export default Mainproduct;