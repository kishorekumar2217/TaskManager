import React, { Component } from 'react';
import Header from '../home/Header';
import OurItem from './ouritem';
import  Review  from './review';
import Pricetable from './pricetable';
import Iconbox from './iconbox';
import Counter from './Counter';

import Partners from './Partners';
import PercentCounters from './PercentCounters';
import Latestnews from './Latestnews';
import Tab from './Tab';
import Accordions  from './Accordions';
import Sociallinks from './Sociallinks';
import Footer from '../home/Footer';
import loadjs from 'loadjs';

class Mainelement extends Component {
    componentDidMount(){
        loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
    }
    render() {
        return (
            <div>
             <Header/>
               <OurItem/>
               <Review/>
               <Pricetable/>
               <Iconbox/>
               <PercentCounters/>
               <Counter/>

               <Partners/>
               <Latestnews/>
               <Tab/>
               <Accordions/>
               <Sociallinks/>
               <Footer/>

            </div>
        );
    }
}

export default Mainelement;