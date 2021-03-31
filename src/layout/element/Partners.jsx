import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import loadjs from 'loadjs';

class Partners extends Component {
    // componentDidMount(){
    //     loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
    // }
    render() {
        return (
           <>
           <main>
    <section class="container stylization maincont">
          <div className="brands-wrap">
  <h3 className="component-ttl component-ttl-ct"><span>Our partners</span></h3>
  <div className="flexslider brands-list">
    <ul className="slides">
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner1.jpg" alt />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner2.jpg" alt />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner3.jpg" alt />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner4.jpg" alt />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner5.jpg" alt />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner6.jpg" alt />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner7.jpg" alt />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="http://google.com">
          <img src="../assets/img/partners/partner8.jpg" alt />
        </a>
      </li>
    </ul>
  </div>
</div>
</section>
</main>
           </>
            
        );
    }
}

Partners.propTypes = {

};

export default Partners;