import React, { Component } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Contact from './contact';
import loadjs from 'loadjs';
class Maincontact extends Component {
    componentDidMount()
    {
        loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
    }
    render() {
        return (
            <div>
                <Header/>
<Contact/>

                <Footer/>
            </div>
        );
    }
}

export default Maincontact;