import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Content extends Component {
  render() {
    return (
      <div>

      <section class="container stylization maincont">
  
  
          <ul class="b-crumbs">
              <li>
                  <Link  to="index.html">
                      Home
                  </Link>
              </li>
              <li>
                  <span>Compare</span>
              </li>
          </ul>
          <h1 class="main-ttl"><span>Compare</span></h1>
          <div class="wccm-compare-table">
              <div class="wccm-thead">
                  <div class="wccm-tr">
                      <div class="wccm-th"></div>
                      <div class="wccm-table-wrapper">
                          <table class="wccm-table">
                              <tbody>
                              <tr>
                                  <td class="wccm-td">
                                      <div class="wccm-thumb">
                                          <i class="fa fa-remove"></i>
                                          <img src="../assets/img/realated/1.jpg" alt=""/>
                                      </div>
                                      <div>
                                          <Link  to="product.html">Porro quae quasi</Link>
                                      </div>
                                      <div class="price">$85</div>
                                  </td>
                                  <td class="wccm-td">
                                      <div class="wccm-thumb">
                                          <i class="fa fa-remove"></i>
                                          <img src="../assets/img/realated/2.jpg" alt=""/>
                                      </div>
                                      <div>
                                          <Link  to="product.html">Fuga impedit inciduntipsa</Link>
                                      </div>
                                      <div class="price">$80</div>
                                  </td>
                                  <td class="wccm-td">
                                      <div class="wccm-thumb">
                                          <i class="fa fa-remove"></i>
                                          <img src="../assets/img/realated/3.jpg" alt=""/>
                                      </div>
                                      <div>
                                          <Link  to="product.html">Sunt temporibus velit</Link>
                                      </div>
                                      <div class="price">$115</div>
                                  </td>
                                  <td class="wccm-td">
                                      <div class="wccm-thumb">
                                          <i class="fa fa-remove"></i>
                                          <img src="../assets/img/realated/4.jpg" alt=""/>
                                      </div>
                                      <div>
                                          <Link  to="product.html">Fuga impedit inciduntipsa</Link>
                                      </div>
                                      <div class="price">$80</div>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
  
  
              
              <div class="wccm-tbody">
                  <div class="wccm-tr">
                      <div class="wccm-th">Gender</div>
                      <div class="wccm-table-wrapper">
                          <table class="wccm-table" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                              <tr>
                                  <td class="wccm-td">
                                      <p>Men</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Women</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Unisex</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Men</p>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="wccm-tr">
                      <div class="wccm-th">Manufacturer</div>
                      <div class="wccm-table-wrapper">
                          <table class="wccm-table" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                              <tr>
                                  <td class="wccm-td">
                                      <p>Germany</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Germany</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Russia</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>USA</p>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="wccm-tr">
                      <div class="wccm-th">Material</div>
                      <div class="wccm-table-wrapper">
                          <table class="wccm-table" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                              <tr>
                                  <td class="wccm-td">
                                      <p>—</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>—</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Polyester</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Cotton</p>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="wccm-tr">
                      <div class="wccm-th">Style</div>
                      <div class="wccm-table-wrapper">
                          <table class="wccm-table" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                              <tr>
                                  <td class="wccm-td">
                                      <p>Casual</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>General</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>Modern</p>
                                  </td>
                                  <td class="wccm-td">
                                      <p>—</p>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
  
      </section>
 </div>
    );
  }
}

