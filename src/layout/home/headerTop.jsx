import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderTop extends Component {
  render() {
    return (
     <>
      <header className="header">
      <div className="header_top">
        <div className="container">
            <ul className="contactinfo nav nav-pills">
                <li>
                    <i className='fa fa-phone'></i> +7 777 123 1575
                </li>
                <li>
                    <i className="fa fa-envelope"></i> admin@real-web.pro
                </li>
            </ul> 
            <ul className="social-icons nav">
                <li>
                    <a href="http://facebook.com" rel="nofollow" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="http://google.com" rel="nofollow" target="_blank">
                        <i className="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com" rel="nofollow" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="http://vk.com" rel="nofollow" target="_blank">
                        <i className="fa fa-vk"></i>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com" rel="nofollow" target="_blank">
                        <i className="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>		</div>
    </div>


    </header>
    </>

    );
  }
}
