import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class OurItem extends Component {
  render() {
    return (
      <div class="container stylization maincont"> 
  <ul class="b-crumbs">
            <li>
                <Link  to="index.html">
                    Home
                </Link>
            </li>
            <li>
                <span>Elements</span>
            </li>
        </ul>
        <h1 class="main-ttl main-ttl-categs"><span>Elements</span></h1>


      <div class="team-wrap">
      <h3 class="component-ttl component-ttl-ct component-ttl-hasdesc"><span>Our team</span></h3>
      <p class="component-desc component-desc-ct">Explicabo tenetur qui accusamus impedit, nobis, perspiciatis aut</p>
      <div class="row team-list">

          <div class="col-sm-4 team-i">
              <p class="team-i-img">
                  <img src="../assets/img/team/team1.jpg" alt="Harold Augustine"/>
              </p>
              <h3 class="team-i-ttl">Harold Augustine</h3>
              <p class="team-i-post">Director</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              <span class="team-i-margin"></span>
              <ul class="team-i-social">
                  <li><Link  to="http://facebook.com/"><i class="fa fa-facebook-square"></i></Link></li>
                  <li><Link  to="http://vk.com/"><i class="fa fa-vk"></i></Link></li>
                  <li><Link  to="http://skype.com/"><i class="fa fa-skype"></i></Link></li>
                  <li><Link  to="http://twitter.com/"><i class="fa fa-twitter"></i></Link></li>
                  <li><Link  to="http://linkedin.com/"><i class="fa fa-linkedin-square"></i></Link></li>
              </ul>
          </div>
          <div class="col-sm-4 team-i">
              <p class="team-i-img">
                  <img src="../assets/img/team/team2.jpg" alt="Wilson Paden"/>
              </p>
              <h3 class="team-i-ttl">Wilson Paden</h3>
              <p class="team-i-post">Developer</p>
              Tempora ea ratione vel nisi, qui perferendis nulla, fugit aut, beatae, tempore modi. Minus sequi iste, nam nobis, excepturi
              <span class="team-i-margin"></span>
              <ul class="team-i-social">
                  <li><Link  to="http://facebook.com/"><i class="fa fa-facebook-square"></i></Link></li>
                  <li><Link  to="http://vk.com/"><i class="fa fa-vk"></i></Link></li>
                  <li><Link  to="http://skype.com/"><i class="fa fa-skype"></i></Link></li>
                  <li><Link  to="http://twitter.com/"><i class="fa fa-twitter"></i></Link></li>
                  <li><Link  to="http://linkedin.com/"><i class="fa fa-linkedin-square"></i></Link></li>
              </ul>
          </div>
          <div class="col-sm-4 team-i">
              <p class="team-i-img">
                  <img src="../assets/img/team/team3.jpg" alt="Murray Heath"/>
              </p>
              <h3 class="team-i-ttl">Murray Heath</h3>
              <p class="team-i-post">Manager</p>
              Dignissimos fuga voluptates totam dolor consectetur velit modi provident eius, doloribus, doloremque quod aperiam magnam quaerat! Alias minima veritatis unde illo
              <span class="team-i-margin"></span>
              <ul class="team-i-social">
                  <li><Link  to="http://facebook.com/"><i class="fa fa-facebook-square"></i></Link></li>
                  <li><Link  to="http://vk.com/"><i class="fa fa-vk"></i></Link></li>
                  <li><Link  to="http://skype.com/"><i class="fa fa-skype"></i></Link></li>
                  <li><Link  to="http://twitter.com/"><i class="fa fa-twitter"></i></Link></li>
                  <li><Link  to="http://linkedin.com/"><i class="fa fa-linkedin-square"></i></Link></li>
              </ul>
          </div>
     

  <br/>
  </div>
  </div>
  </div>
    );
  }
}
