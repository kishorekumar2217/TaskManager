import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Items from './items';
import loadjs from 'loadjs';
class cataloglist extends Component {
    componentDidMount(){
        loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
    }
    render() {
        return (
            <div>
            <Header/>
               <main>
    <section class="container">


        <ul class="b-crumbs">
            <li>
                 <Link  to="index.html">
                    Home
                 </Link>
            </li>
            <li>
                 <Link  to="catalog-list.html">
                    Catalog
                 </Link>
            </li>
            <li>
                <span>Women</span>
            </li>
        </ul>
        <h1 class="main-ttl"><span>Women</span></h1>
        {/* <!-- Catalog Sidebar - start --> */}
        <div class="section-sb">

            {/* <!-- Catalog Categories - start --> */}
            <div class="section-sb-current">
                <h3> <Link  to="catalog-list.html">Women <span id="section-sb-toggle" class="section-sb-toggle"><span class="section-sb-ico"></span></span> </Link></h3>
                <ul class="section-sb-list" id="section-sb-list">
                    <li class="categ-1">
                         <Link  to="catalog-list.html">
                            <span class="categ-1-label">Knitwear</span>
                         </Link>
                    </li>
                    <li class="categ-1">
                         <Link  to="catalog-list.html">
                            <span class="categ-1-label">Dresses</span>
                         </Link>
                    </li>
                    <li class="categ-1 has_child">
                         <Link  to="catalog-list.html">
                            <span class="categ-1-label">Bags</span>
                            <span class="section-sb-toggle"><span class="section-sb-ico"></span></span>
                         </Link>
                        <ul>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Shoulder Bags</span>
                                 </Link>
                            </li>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Falabella</span>
                                 </Link>
                            </li>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Becks</span>
                                 </Link>
                            </li>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Clutches</span>
                                 </Link>
                            </li>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Travel Bags</span>
                                 </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="categ-1 has_child">
                         <Link  to="catalog-list.html">
                            <span class="categ-1-label">Accessories</span>
                            <span class="section-sb-toggle"><span class="section-sb-ico"></span></span>
                         </Link>
                        <ul>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Sunglasses</span>
                                 </Link>
                            </li>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Tech Cases</span>
                                 </Link>
                            </li>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Jewelry</span>
                                 </Link>
                            </li>
                            <li class="categ-2">
                                 <Link  to="catalog-list.html">
                                    <span class="categ-2-label">Stella</span>
                                 </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="categ-1">
                         <Link  to="catalog-list.html">
                            <span class="categ-1-label">Coats & Jackets</span>
                         </Link>
                    </li>
                </ul>
            </div>
            {/* <!-- Catalog Categories - end --> */}

            {/* <!-- Filter - start --> */}
            <div class="section-filter">
                <button id="section-filter-toggle" class="section-filter-toggle" data-close="Hide Filter" data-open="Show Filter">
                    <span>Show Filter</span> <i class="fa fa-angle-down"></i>
                </button>
                <div class="section-filter-cont">
                    <div class="section-filter-price">
                        <div class="range-slider section-filter-price" data-min="0" data-max="1000" data-from="200" data-to="800" data-prefix="$" data-grid="false"></div>
                    </div>
                    <div class="section-filter-item">
                        <p class="section-filter-ttl">Style <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox2-1" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox2-1">Work</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox2-2" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox2-2">Vintage</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox2-3" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox2-3">Cute</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox2-4" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox2-4">Novelty</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox2-5" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox2-5">Brief</label>
                            </p>
                        </div>
                    </div>
                    <div class="section-filter-item opened">
                        <p class="section-filter-ttl">Material <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox3-1" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox3-1">Cotton</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox3-2" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox3-2">Spandex</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox3-3" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox3-3">Polyester</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox3-4" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox3-4">Acetate</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox3-5" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox3-5">Microfiber</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox3-6" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox3-6">Silk</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox3-7" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox3-7">Fur</label>
                            </p>
                        </div>
                    </div>
                    <div class="section-filter-item opened">
                        <p class="section-filter-ttl">Color <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <ul class="section-filter-color">
                                <li class="active"><img src="../assets/img/color/red.jpg" alt="Red"/></li>
                                <li><img src="../assets/img/color/blue.jpg" alt="Blue"/></li>
                                <li><img src="../assets/img/color/green.jpg" alt="Green"/></li>
                                <li><img src="../assets/img/color/yellow.jpg" alt="Yellow"/></li>
                                <li><img src="../assets/img/color/purple.jpg" alt="Purple"/></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section-filter-item opened">
                        <p class="section-filter-ttl">Decoration <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <div class="section-filter-select">
                                <select data-placeholder="Decoration" class="chosen-select">
                                    <option>Pattern</option>
                                    <option>Pockets</option>
                                    <option>Button</option>
                                    <option>Beading</option>
                                    <option>LOGO</option>
                                    <option>Spliced</option>
                                    <option>Letter</option>
                                    <option>Pleated</option>
                                    <option>Appliques</option>
                                    <option>Bow</option>
                                    <option>Criss-Cross</option>
                                    <option>Crystal</option>
                                    <option>Draped</option>
                                    <option>Embroidery</option>
                                    <option>Feathers</option>
                                    <option>Fur</option>
                                    <option>Flowers</option>
                                    <option>Lace</option>
                                    <option>Pearls</option>
                                    <option>Ruched</option>
                                    <option>Ruffles</option>
                                    <option>Sashes</option>
                                    <option>Ribbons</option>
                                    <option>Sequined</option>
                                    <option>Tassel</option>
                                    <option>Rivet</option>
                                    <option>Hole</option>
                                    <option>Hollow Out</option>
                                    <option>Embroidered Flares</option>
                                    <option>Cuffs</option>
                                    <option>Patches</option>
                                    <option>Fake Zippers</option>
                                    <option>Bleached</option>
                                    <option>Ripped</option>
                                    <option>Washed</option>
                                    <option>Patchwork</option>
                                    <option>Scratched</option>
                                    <option>Side Stripe</option>
                                    <option>None</option>
                                    <option>Character</option>
                                    <option>Other</option>
                                    <option>Badge</option>
                                    <option>Offset printing</option>
                                    <option>Patch pocket</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="section-filter-item opened">
                        <p class="section-filter-ttl">Manufacturer country <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <div class="section-filter-select">
                                <select data-placeholder="Manufacturer country" class="chosen-select" multiple>
                                    <optgroup label="EUROPE">
                                        <option>Albania</option>
                                        <option>Andorra</option>
                                        <option>Armenia</option>
                                        <option>Austria</option>
                                        <option>Azerbaijan</option>
                                        <option>Belarus</option>
                                        <option>Belgium</option>
                                        <option>Bosnia and Herzegovina</option>
                                        <option>Bulgaria</option>
                                        <option>Croatia</option>
                                        <option>Cyprus</option>
                                        <option>Czech Republic</option>
                                        <option>Denmark</option>
                                        <option>Estonia</option>
                                        <option>Finland</option>
                                        <option>France</option>
                                        <option>Georgia</option>
                                        <option>Germany</option>
                                        <option>Greece</option>
                                        <option>Hungary</option>
                                        <option>Iceland</option>
                                        <option>Ireland</option>
                                        <option>Italy</option>
                                        <option>Latvia</option>
                                        <option>Liechtenstein</option>
                                        <option>Lithuania</option>
                                        <option>Luxembourg</option>
                                        <option>Macedonia</option>
                                        <option>Malta</option>
                                        <option>Moldova</option>
                                        <option>Monaco</option>
                                        <option>Montenegro</option>
                                        <option>Netherlands</option>
                                        <option>Norway</option>
                                        <option>Poland</option>
                                        <option>Portugal</option>
                                        <option>Romania</option>
                                        <option>San Marino</option>
                                        <option>Serbia</option>
                                        <option>Slovakia</option>
                                        <option>Slovenia</option>
                                        <option>Spain</option>
                                        <option>Sweden</option>
                                        <option>Switzerland</option>
                                        <option>Ukraine</option>
                                        <option>United Kingdom</option>
                                        <option>Vatican City</option>
                                    </optgroup>
                                    <optgroup label="ASIA">
                                        <option>Afghanistan</option>
                                        <option>Bahrain</option>
                                        <option>Bangladesh</option>
                                        <option>Bhutan</option>
                                        <option>Brunei</option>
                                        <option>Burma (Myanmar)</option>
                                        <option>Cambodia</option>
                                        <option>China</option>
                                        <option>East Timor</option>
                                        <option>India</option>
                                        <option>Indonesia</option>
                                        <option>Iran</option>
                                        <option>Iraq</option>
                                        <option>Israel</option>
                                        <option>Japan</option>
                                        <option>Jordan</option>
                                        <option>Kazakhstan</option>
                                        <option>Korea, North</option>
                                        <option>Korea, South</option>
                                        <option>Kuwait</option>
                                        <option>Kyrgyzstan</option>
                                        <option>Laos</option>
                                        <option>Lebanon</option>
                                        <option>Malaysia</option>
                                        <option>Maldives</option>
                                        <option>Mongolia</option>
                                        <option>Nepal</option>
                                        <option>Oman</option>
                                        <option>Pakistan</option>
                                        <option>Philippines</option>
                                        <option>Qatar</option>
                                        <option>Russian Federation</option>
                                        <option>Saudi Arabia</option>
                                        <option>Singapore</option>
                                        <option>Sri Lanka</option>
                                        <option>Syria</option>
                                        <option>Tajikistan</option>
                                        <option>Thailand</option>
                                        <option>Turkey</option>
                                        <option>Turkmenistan</option>
                                        <option>United Arab Emirates</option>
                                        <option>Uzbekistan</option>
                                        <option>Vietnam</option>
                                        <option>Yemen</option>
                                    </optgroup>
                                    <optgroup label="N. AMERICA">
                                        <option>Antigua and Barbuda</option>
                                        <option>Bahamas</option>
                                        <option>Barbados</option>
                                        <option>Belize</option>
                                        <option>Canada</option>
                                        <option>Costa Rica</option>
                                        <option>Cuba</option>
                                        <option>Dominica</option>
                                        <option>Dominican Republic</option>
                                        <option>El Salvador</option>
                                        <option>Grenada</option>
                                        <option>Guatemala</option>
                                        <option>Haiti</option>
                                        <option>Honduras</option>
                                        <option>Jamaica</option>
                                        <option>Mexico</option>
                                        <option>Nicaragua</option>
                                        <option>Panama</option>
                                        <option>Saint Kitts and Nevis</option>
                                        <option>Saint Lucia</option>
                                        <option>Saint Vincent and the Grenadines</option>
                                        <option>Trinidad and Tobago</option>
                                        <option>United States</option>
                                    </optgroup>
                                    <optgroup label="S. AMERICA">
                                        <option>Argentina</option>
                                        <option>Bolivia</option>
                                        <option>Brazil</option>
                                        <option>Chile</option>
                                        <option>Colombia</option>
                                        <option>Ecuador</option>
                                        <option>Guyana</option>
                                        <option>Paraguay</option>
                                        <option>Peru</option>
                                        <option>Suriname</option>
                                        <option>Uruguay</option>
                                        <option>Venezuela</option>
                                    </optgroup>
                                    <optgroup label="AFRICA">
                                        <option>Algeria</option>
                                        <option>Angola</option>
                                        <option>Benin</option>
                                        <option>Botswana</option>
                                        <option>Burkina</option>
                                        <option>Burundi</option>
                                        <option>Cameroon</option>
                                        <option>Cape Verde</option>
                                        <option>Central African Republic</option>
                                        <option>Chad</option>
                                        <option>Comoros</option>
                                        <option>Congo</option>
                                        <option>Congo</option>
                                        <option>Djibouti</option>
                                        <option>Egypt</option>
                                        <option>Equatorial Guinea</option>
                                        <option>Eritrea</option>
                                        <option>Ethiopia</option>
                                        <option>Gabon</option>
                                        <option>Gambia</option>
                                        <option>Ghana</option>
                                        <option>Guinea</option>
                                        <option>Guinea-Bissau</option>
                                        <option>Ivory Coast</option>
                                        <option>Kenya</option>
                                        <option>Lesotho</option>
                                        <option>Liberia</option>
                                        <option>Libya</option>
                                        <option>Madagascar</option>
                                        <option>Malawi</option>
                                        <option>Mali</option>
                                        <option>Mauritania</option>
                                        <option>Mauritius</option>
                                        <option>Morocco</option>
                                        <option>Mozambique</option>
                                        <option>Namibia</option>
                                        <option>Niger</option>
                                        <option>Nigeria</option>
                                        <option>Rwanda</option>
                                        <option>Sao Tome and Principe</option>
                                        <option>Senegal</option>
                                        <option>Seychelles</option>
                                        <option>Sierra Leone</option>
                                        <option>Somalia</option>
                                        <option>South Africa</option>
                                        <option>South Sudan</option>
                                        <option>Sudan</option>
                                        <option>Swaziland</option>
                                        <option>Tanzania</option>
                                        <option>Togo</option>
                                        <option>Tunisia</option>
                                        <option>Uganda</option>
                                        <option>Zambia</option>
                                        <option>Zimbabwe</option>
                                    </optgroup>
                                    <optgroup label="OCEANIA">
                                        <option>Australia</option>
                                        <option>Fiji</option>
                                        <option>Kiribati</option>
                                        <option>Marshall Islands</option>
                                        <option>Micronesia</option>
                                        <option>Nauru</option>
                                        <option>New Zealand</option>
                                        <option>Palau</option>
                                        <option>Papua New Guinea</option>
                                        <option>Samoa</option>
                                        <option>Solomon Islands</option>
                                        <option>Tonga</option>
                                        <option>Tuvalu</option>
                                        <option>Vanuatu</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="section-filter-item">
                        <p class="section-filter-ttl">Pattern Type <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox4-1" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox4-1">Solid</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox4-2" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox4-2">Patchwork</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox4-3" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox4-3">Dot</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox4-4" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox4-4">Print</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox4-5" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox4-5">Character</label>
                            </p>
                        </div>
                    </div>
                    <div class="section-filter-item">
                        <p class="section-filter-ttl">Fit Type <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox5-1" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox5-1">Loose</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox5-2" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox5-2">Skinny</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox5-3" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox5-3">Regular</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox5-4" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox5-4">Straight</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox5-5" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox5-5">Boot Cut</label>
                            </p>
                        </div>
                    </div>
                    <div class="section-filter-item opened">
                        <p class="section-filter-ttl">Fabric Type <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <p class="section-filter-field">
                                <input id="section-filter-radio1-1" value="on" type="radio" name="section-filter-radio1"/>
                                <label class="section-filter-radio" for="section-filter-radio1-1">Velour</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-radio1-2" value="on" type="radio" name="section-filter-radio1"/>
                                <label class="section-filter-radio" for="section-filter-radio1-2">Batik</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-radio1-3" value="on" type="radio" name="section-filter-radio1"/>
                                <label class="section-filter-radio" for="section-filter-radio1-3">Chiffon</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-radio1-4" value="on" type="radio" name="section-filter-radio1"/>
                                <label class="section-filter-radio" for="section-filter-radio1-4">Broadcloth</label>
                            </p>
                        </div>
                    </div>
                    <div class="section-filter-item">
                        <p class="section-filter-ttl">Wash <i class="fa fa-angle-down"></i></p>
                        <div class="section-filter-fields">
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox6-1" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox6-1">Colored</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox6-2" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox6-2">Light</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox6-3" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox6-3">Medium</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox6-4" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox6-4">Stonewashed</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox6-5" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox6-5">White</label>
                            </p>
                            <p class="section-filter-field">
                                <input id="section-filter-checkbox6-6" value="on" type="checkbox"/>
                                <label class="section-filter-checkbox" for="section-filter-checkbox6-6">Distrressed</label>
                            </p>
                        </div>
                    </div>
                    <div class="section-filter-buttons">
                        <input class="btn btn-themes" id="set_filter" name="set_filter" value="Apply filter" type="button"/>
                        <input class="btn btn-link" id="del_filter" name="del_filter" value="Reset" type="button"/>
                    </div>
                </div>
            </div>
            {/* <!-- Filter - end --> */}

        </div>
        {/* <!-- Catalog Sidebar - end --> */}
        {/* <!-- Catalog Items | List V2 - start --> */}
        <div class="section-cont">
{/* 
            <!-- Catalog Topbar - start --> */}
            <div class="section-top">

                {/* <!-- View Mode --> */}
                <ul class="section-mode">
                    <li class="section-mode-gallery"> <Link title="View mode: Gallery"  to="/Gallery"> </Link></li>
                    <li class="section-mode-list active"> <Link title="View mode: List"  to="/cataloglist"> </Link></li>
                    {/* <li class="section-mode-table"> <Link title="View mode: Table"  to="catalog-table.html"> </Link></li> */}
                </ul>

                {/* <!-- Sorting --> */}
                <div class="section-sortby">
                    <p>default sorting</p>
                    <ul>
                        <li>
                             <Link  to="#">sort by popularity </Link>
                        </li>
                        <li>
                             <Link  to="#">low price to high </Link>
                        </li>
                        <li>
                             <Link  to="#">high price to low </Link>
                        </li>
                        <li>
                             <Link  to="#">by title A <i class="fa fa-angle-right"></i> Z </Link>
                        </li>
                        <li>
                             <Link  to="#">by title Z <i class="fa fa-angle-right"></i> A </Link>
                        </li>
                        <li>
                             <Link  to="#">default sorting </Link>
                        </li>
                    </ul>
                </div>

                {/* <!-- Count per page --> */}
                <div class="section-count">
                    <p>12</p>
                    <ul>
                        <li> <Link  to="#">12 </Link></li>
                        <li> <Link  to="#">24 </Link></li>
                        <li> <Link  to="#">48 </Link></li>
                    </ul>
                </div>

            </div>
            {/* <!-- Catalog Topbar - end --> */}












{/*             
            <div class="prod-items section-items prod-list2">


                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                    <img src="../assets/img/catalog/a2.jpg" alt="Adipisci aperiam commodi"/>
                    <img src="../assets/img/catalog/a3.jpg" alt="Adipisci aperiam commodi"/>
                    <img src="../assets/img/catalog/a4.jpg" alt="Adipisci aperiam commodi"/>
                    <img src="../assets/img/catalog/a1.jpg" alt="Adipisci aperiam commodi"/>
                </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Adipisci aperiam commodi </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Quisquam totam quas veritatis dolor voluptates, laudantium repellendus. Cupiditate repellat tempora consequatur sequi, neque                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$59</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                        <div class="prodlist-i-skuwrap">
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Color</p>
                                <ul class="prodlist-i-skucolor">
                                    <li class="active"><img src="../assets/img/color/blue.jpg" alt=""/></li>
                                    <li><img src="../assets/img/color/red.jpg" alt=""/></li>
                                    <li><img src="../assets/img/color/green.jpg" alt=""/></li>
                                </ul>
                            </div>
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Clothes sizes</p>
                                <div class="offer-props-select">
                                    <p>XS</p>
                                    <ul>
                                        <li> <Link  to="#">S </Link></li>
                                        <li> <Link  to="#">M </Link></li>
                                        <li> <Link  to="#">L </Link></li>
                                        <li class="active"> <Link  to="#">XS </Link></li>
                                        <li> <Link  to="#">XL </Link></li>
                                        <li> <Link  to="#">XXL </Link></li>
                                        <li> <Link  to="#">XXXL </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Exterior</span></span> <span class="prodlist-i-propval">Silt Pocket</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">PU</span></li>
                        <li><span class="prodlist-i-propttl"><span>Occasion</span></span> <span class="prodlist-i-propval">Versatile</span></li>
                        <li><span class="prodlist-i-propttl"><span>Shape</span></span> <span class="prodlist-i-propval">Casual Tote</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">American Style</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hardness</span></span> <span class="prodlist-i-propval">Soft</span></li>
                        <li><span class="prodlist-i-propttl"><span>Decoration</span></span> <span class="prodlist-i-propval">None</span></li>
                        <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Zipper</span></li>
                    </ul>
                </div>






                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                   <img src="../assets/img/catalog/b1.jpg" alt="Nulla numquam obcaecati"/>
                    <img src="../assets/img/catalog/b2.jpg" alt="Nulla numquam obcaecati"/>
                    <img src="../assets/img/catalog/b4.jpg" alt="Nulla numquam obcaecati"/>
                    <img src="../assets/img/catalog/b5.jpg" alt="Nulla numquam obcaecati"/>
                     </Link>

                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Nulla numquam obcaecati </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Assumenda deserunt eligendi qui, est error, sed dolorum magnam sequi totam recusandae nam minima accusamus illo dolores adipisci non fugit quis consequatur                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$48</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Cotton,Polyester</span></li>
                        <li><span class="prodlist-i-propttl"><span>Sleeve Length</span></span> <span class="prodlist-i-propval">Short</span></li>
                        <li><span class="prodlist-i-propttl"><span>Tops Type</span></span> <span class="prodlist-i-propval">Tees</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Casual</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hooded</span></span> <span class="prodlist-i-propval">No</span></li>
                        <li><span class="prodlist-i-propttl"><span>Collar</span></span> <span class="prodlist-i-propval">V-Neck</span></li>
                        <li><span class="prodlist-i-propttl"><span>Sleeve Style</span></span> <span class="prodlist-i-propval">General</span></li>
                    </ul>
                </div>


                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                    <img src="../assets/img/catalog/c1.jpg" alt="Dignissimos eaque earum"/>
                  <img src="../assets/img/catalog/c2.jpg "alt="Dignissimos eaque earum"/>
                  <img src="../assets/img/catalog/c3.jpg" alt="Dignissimos eaque earum"/>
                  <img src="../assets/img/catalog/c4.jpg" alt="Dignissimos eaque earum"/> </Link>
                  
                 
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Dignissimos eaque earum </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Deserunt sapiente mollitia expedita, quia blanditiis ipsam dignissimos? A consectetur tempora dolorum quisquam assumenda, quidem ratione accusamus cupiditate commodi                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$37</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Unisex</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Wool, Polyester</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Casual</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hats size</span></span> <span class="prodlist-i-propval">Oversize</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                    <img src="../assets/img/catalog/d1.jpg" alt="Porro quae quasi"/>
                    <img src="../assets/img/catalog/d2.jpg" alt="Porro quae quasi"/>
                    <img src="../assets/img/catalog/d3.jpg" alt="Porro quae quasi"/>
                    <img src="../assets/img/catalog/d4.jpg" alt="Porro quae quasi"/> </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Porro quae quasi </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Rerum est facere consequuntur, vero error deleniti totam vitae, eius necessitatibus, deserunt cupiditate quae iusto sint quasi, id officiis! Labore amet, architecto dolorum rerum voluptates                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$85</b>
                                                            <del>$110</del>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Sleeve Length</span></span> <span class="prodlist-i-propval">Full</span></li>
                        <li><span class="prodlist-i-propttl"><span>Sleeve Style</span></span> <span class="prodlist-i-propval">Long sleeve</span></li>
                        <li><span class="prodlist-i-propttl"><span>Collar</span></span> <span class="prodlist-i-propval">V-Neck</span></li>
                        <li><span class="prodlist-i-propttl"><span>Fabric Type</span></span> <span class="prodlist-i-propval">Broadcloth</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Cotton,Spandex</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hooded</span></span> <span class="prodlist-i-propval">No</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Men</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Fashion</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                   <img src="../assets/img/catalog/e1.jpg" alt="Sunt temporibus velit"/>
                   <img src="../assets/img/catalog/e2.jpg" alt="Sunt temporibus velit"/>
                   <img src="../assets/img/catalog/e3.jpg" alt="Sunt temporibus velit"/>
                   <img src="../assets/img/catalog/e4.jpg" alt="Sunt temporibus velit"/>
 
                   </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Sunt temporibus velit </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Excepturi odit perferendis assumenda nisi cum, sunt autem quos odio quibusdam ipsa, molestias eum officia                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$115</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                        <div class="prodlist-i-skuwrap">
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Color</p>
                                <ul class="prodlist-i-skucolor">
                                    <li class="active"><img src="img/color/blue.jpg" alt=""/></li>
                                    <li><img src="img/color/red.jpg" alt=""/></li>
                                    <li><img src="img/color/green.jpg" alt=""/></li>
                                </ul>
                            </div>
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Clothes sizes</p>
                                <div class="offer-props-select">
                                    <p>XS</p>
                                    <ul>
                                        <li> <Link  to="#">S </Link></li>
                                        <li> <Link  to="#">M </Link></li>
                                        <li> <Link  to="#">L </Link></li>
                                        <li class="active"> <Link  to="#">XS </Link></li>
                                        <li> <Link  to="#">XL </Link></li>
                                        <li> <Link  to="#">XXL </Link></li>
                                        <li> <Link  to="#">XXXL </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Men</span></li>
                        <li><span class="prodlist-i-propttl"><span>Shaft Material</span></span> <span class="prodlist-i-propval">Flock</span></li>
                        <li><span class="prodlist-i-propttl"><span>Lining Material</span></span> <span class="prodlist-i-propval">Plush</span></li>
                        <li><span class="prodlist-i-propttl"><span>Insole Material</span></span> <span class="prodlist-i-propval">Rubber</span></li>
                        <li><span class="prodlist-i-propttl"><span>Season</span></span> <span class="prodlist-i-propval">Winter</span></li>
                        <li><span class="prodlist-i-propttl"><span>With Platforms</span></span> <span class="prodlist-i-propval">No</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Boot Height</span></span> <span class="prodlist-i-propval">Ankle</span></li>
                        <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Lace-Up</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                    <img src="../assets/img/catalog/f1.jpg" alt="Harum illum incidunt"/>
                    <img src="../assets/img/catalog/f2.jpg" alt="Harum illum incidunt"/>
                    <img src="../assets/img/catalog/f3.jpg" alt="Harum illum incidunt"/>
                    <img src="../assets/img/catalog/f4.jpg" alt="Harum illum incidunt"/> 
               
                    </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Harum illum incidunt </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Distinctio laborum quos fugit nobis mollitia rem sit saepe perspiciatis qui                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$130</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                        <div class="prodlist-i-skuwrap">
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Clothes sizes</p>
                                <div class="offer-props-select">
                                    <p>XS</p>
                                    <ul>
                                        <li> <Link  to="#">S </Link></li>
                                        <li> <Link  to="#">M </Link></li>
                                        <li> <Link  to="#">L </Link></li>
                                        <li class="active"> <Link  to="#">XS </Link></li>
                                        <li> <Link  to="#">XL </Link></li>
                                        <li> <Link  to="#">XXL </Link></li>
                                        <li> <Link  to="#">XXXL </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Outerwear Type</span></span> <span class="prodlist-i-propval">Jackets</span></li>
                        <li><span class="prodlist-i-propttl"><span>Sleeve Style</span></span> <span class="prodlist-i-propval">Regular</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Polyester,Cotton</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hooded</span></span> <span class="prodlist-i-propval">Yes</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Casual</span></li>
                        <li><span class="prodlist-i-propttl"><span>Collar</span></span> <span class="prodlist-i-propval">Turn-down Collar</span></li>
                        <li><span class="prodlist-i-propttl"><span>Decoration</span></span> <span class="prodlist-i-propval">Pockets</span></li>
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Men</span></li>
                        <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Zipper</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                    <img src="../assets/img/catalog/g1.jpg" alt="Reprehenderit rerum"/>
                    <img src="../assets/img/catalog/g2.jpg" alt="Reprehenderit rerum"/>
                    <img src="../assets/img/catalog/g3.jpg" alt="Reprehenderit rerum"/> </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Reprehenderit rerum </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$210</b>
                                                            <del>$240</del>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                        <div class="prodlist-i-skuwrap">
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Color</p>
                                <ul class="prodlist-i-skucolor">
                                    <li class="active"><img src="img/color/blue.jpg" alt=""/></li>
                                    <li><img src="img/color/red.jpg" alt=""/></li>
                                    <li><img src="img/color/green.jpg" alt=""/></li>
                                </ul>
                            </div>
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Clothes sizes</p>
                                <div class="offer-props-select">
                                    <p>XS</p>
                                    <ul>
                                        <li> <Link  to="#">S </Link></li>
                                        <li> <Link  to="#">M </Link></li>
                                        <li> <Link  to="#">L </Link></li>
                                        <li class="active"> <Link  to="#">XS </Link></li>
                                        <li> <Link  to="#">XL </Link></li>
                                        <li> <Link  to="#">XXL </Link></li>
                                        <li> <Link  to="#">XXXL </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Outerwear Type</span></span> <span class="prodlist-i-propval">Jackets</span></li>
                        <li><span class="prodlist-i-propttl"><span>Sleeve Style</span></span> <span class="prodlist-i-propval">Regular</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Polyester,Cotton</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hooded</span></span> <span class="prodlist-i-propval">Yes</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Casual</span></li>
                        <li><span class="prodlist-i-propttl"><span>Collar</span></span> <span class="prodlist-i-propval">Turn-down Collar</span></li>
                        <li><span class="prodlist-i-propttl"><span>Decoration</span></span> <span class="prodlist-i-propval">Pockets</span></li>
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Boys</span></li>
                        <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Zipper</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                <img src="../assets/img/catalog/h1.jpg" alt="Quae quasi adipisci alias"/>
                    <img src="../assets/img/catalog/h2.jpg" alt="Quae quasi adipisci alias"/>
                    <img src="../assets/img/catalog/h3.jpg" alt="Quae quasi adipisci alias"/>
                    <img src="../assets/img/catalog/h4.jpg" alt="Quae quasi adipisci alias"/>
          
                     </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Quae quasi adipisci alias </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Cum nihil saepe itaque, quibusdam quos libero, et possimus rerum ratione similique                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$85</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Women</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Color Style</span></span> <span class="prodlist-i-propval">Natural Color</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Polyester</span></li>
                        <li><span class="prodlist-i-propttl"><span>Length</span></span> <span class="prodlist-i-propval">LongHooded</span></li>
                        <li><span class="prodlist-i-propttl"><span>Fabric Type</span></span> <span class="prodlist-i-propval">Woven</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
    <img src="../assets/img/catalog/i1.jpg" alt="Maxime molestias necessitatibus nobis"/>
    <img src="../assets/img/catalog/i2.jpg" alt="Maxime molestias necessitatibus nobis"/>
    <img src="../assets/img/catalog/i3.jpg" alt="Maxime molestias necessitatibus nobis"/>
    <img src="../assets/img/catalog/i4.jpg" alt="Maxime molestias necessitatibus nobis"/>
     </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Maxime molestias necessitatibus nobis </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Tempora eius in voluptates quos dolorem, omnis consequatur quae, autem eligendi totam ex esse dolores accusamus                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$95</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Outerwear Type</span></span> <span class="prodlist-i-propval">Jackets</span></li>
                        <li><span class="prodlist-i-propttl"><span>Sleeve Style</span></span> <span class="prodlist-i-propval">Regular</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Polyester,Cotton</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hooded</span></span> <span class="prodlist-i-propval">Yes</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Casual</span></li>
                        <li><span class="prodlist-i-propttl"><span>Collar</span></span> <span class="prodlist-i-propval">Turn-down Collar</span></li>
                        <li><span class="prodlist-i-propttl"><span>Decoration</span></span> <span class="prodlist-i-propval">Pockets</span></li>
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Men</span></li>
                        <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Zipper</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
            <img src="../assets/img/catalog/j1.jpg" alt="Facilis illum"/>
               <img src="../assets/img/catalog/j2.jpg" alt="Facilis illum"/>
               <img src="../assets/img/catalog/j3.jpg" alt="Facilis illum"/>
               <img src="../assets/img/catalog/j4.jpg" alt="Facilis illum"/>
                </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Facilis illum </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Quis temporibus hic reprehenderit explicabo odio earum maxime cupiditate mollitia                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$150</b>
                                                            <del>$180</del>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                        <div class="prodlist-i-skuwrap">
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Color</p>
                                <ul class="prodlist-i-skucolor">
                                    <li class="active"><img src="img/color/blue.jpg" alt=""/></li>
                                    <li><img src="img/color/red.jpg" alt=""/></li>
                                    <li><img src="img/color/green.jpg" alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Outerwear Type</span></span> <span class="prodlist-i-propval">Down & Parkas</span></li>
                        <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Zipper</span></li>
                        <li><span class="prodlist-i-propttl"><span>Filling</span></span> <span class="prodlist-i-propval">Cotton</span></li>
                        <li><span class="prodlist-i-propttl"><span>Fabric Type</span></span> <span class="prodlist-i-propval">Woven</span></li>
                        <li><span class="prodlist-i-propttl"><span>Clothing Length</span></span> <span class="prodlist-i-propval">Regular</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Polyester</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Decoration</span></span> <span class="prodlist-i-propval">Pockets, Zippers</span></li>
                        <li><span class="prodlist-i-propttl"><span>Sleeve Length</span></span> <span class="prodlist-i-propval">Full</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hooded</span></span> <span class="prodlist-i-propval">Yes</span></li>
                    </ul>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                    <img src="../assets/img/catalog/k1.jpg" alt="Iusto labore laudantium"/>
                    <img src="../assets/img/catalog/k2.jpg" alt="Iusto labore laudantium"/>
                    <img src="h../assets/img/catalog/k3.jpg" alt="Iusto labore laudantium"/>
                    <img src="../assets/img/catalog/k4.jpg" alt="Iusto labore laudantium"/>
                     </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Iusto labore laudantium </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Veniam, non harum voluptate dicta sit porro iste cumque eligendi                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$170</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                        <div class="prodlist-i-skuwrap">
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Color</p>
                                <ul class="prodlist-i-skucolor">
                                    <li class="active"><img src="img/color/blue.jpg" alt=""/></li>
                                    <li><img src="img/color/red.jpg" alt=""/></li>
                                    <li><img src="img/color/green.jpg" alt=""/></li>
                                </ul>
                            </div>
                            <div class="prodlist-i-skuitem">
                                <p class="prodlist-i-skuttl">Clothes sizes</p>
                                <div class="offer-props-select">
                                    <p>XS</p>
                                    <ul>
                                        <li> <Link  to="#">S </Link></li>
                                        <li> <Link  to="#">M </Link></li>
                                        <li> <Link  to="#">L </Link></li>
                                        <li class="active"> <Link  to="#">XS </Link></li>
                                        <li> <Link  to="#">XL </Link></li>
                                        <li> <Link  to="#">XXL </Link></li>
                                        <li> <Link  to="#">XXXL </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Handbags Type</span></span> <span class="prodlist-i-propval">Shoulder Bags</span></li>
                        <li><span class="prodlist-i-propttl"><span>Exterior</span></span> <span class="prodlist-i-propval">Silt Pocket</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Canvas</span></li>
                        <li><span class="prodlist-i-propttl"><span>Occasion</span></span> <span class="prodlist-i-propval">Versatile</span></li>
                        <li><span class="prodlist-i-propttl"><span>Shape</span></span> <span class="prodlist-i-propval">Casual Tote</span></li>
                        <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Casual</span></li>
                        <li><span class="prodlist-i-propttl"><span>Hardness</span></span> <span class="prodlist-i-propval">Soft</span></li>
                        <li><span class="prodlist-i-propttl"><span>Decoration</span></span> <span class="prodlist-i-propval">None</span></li>
                        <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Zipper</span></li>
                    </ul>

                    <div class="prod-sticker">
                        <p class="prod-sticker-3">-30%</p><p class="prod-sticker-4 countdown" data-date="29 Jan 2017, 14:30:00"></p>
                    </div>
                </div>
                <div class="prodlist-i">
                     <Link class="list-img-carousel prodlist-i-img"  to="product.html">
                    <img src="../assets/img/catalog/l.jpg" alt="Fuga impedit inciduntipsa"/> </Link>
                    <div class="prodlist-i-cont">
                        <h3> <Link  to="product.html">Fuga impedit inciduntipsa </Link></h3>
                        <p class="prodlist-i-info">
                             <Link  to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                             <Link  to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                             <Link class="prodlist-i-compare"  to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                        </p>
                        <div class="prodlist-i-txt">
                            Praesentium iure inventore nostrum corporis illum, est asperiores accusamus, ducimus, accusantium natus                        </div>
                        <div class="prodlist-i-action">
                        <span class="prodlist-i-price">
                            <b>$80</b>
                                                    </span>
                            <p class="prodlist-i-qnt">
                                <input value="1" type="text"/>
                                 <Link  to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                 <Link  to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                            </p>
                            <p class="prodlist-i-addwrap">
                                 <Link  to="#" class="prodlist-i-add">Add to cart </Link>
                            </p>
                        </div>
                    </div>

                    <ul class="prodlist-i-props2">
                        <li><span class="prodlist-i-propttl"><span>Gender</span></span> <span class="prodlist-i-propval">Women</span></li>
                        <li><span class="prodlist-i-propttl"><span>Silhouette</span></span> <span class="prodlist-i-propval">Sheath</span></li>
                        <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">Polyester</span></li>
                        <li><span class="prodlist-i-propttl"><span>Season</span></span> <span class="prodlist-i-propval">Autumn</span></li>
                        <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">Casual</span></li>
                        <li><span class="prodlist-i-propttl"><span>Waistline</span></span> <span class="prodlist-i-propval">Natural</span></li>
                    </ul>

                    <div class="prod-sticker">
                        <p class="prod-sticker-1">NEW</p>
                    </div>
                </div>
            </div> */}
            <Items/>
            {/* <!-- Pagination - start --> */}
            <ul class="pagi">
                <li class="active"><span>1</span></li>
                <li> <Link  to="#">2 </Link></li>
                <li> <Link  to="#">3 </Link></li>
                <li> <Link  to="#">4 </Link></li>
                <li class="pagi-next"> <Link  to="#"><i class="fa fa-angle-double-right"></i> </Link></li>
            </ul>
            {/* <!-- Pagination - end --> */}
        </div>
        {/* <!-- Catalog Items | List V2 - end --> */}
{/*  */}
        {/* <!-- Quick View Product - start --> */}
        <div class="qview-modal">
            <div class="prod-wrap">
                 <Link  to="product.html">
                    <h1 class="main-ttl">
                        <span>Reprehenderit adipisci</span>
                    </h1>
                 </Link>
                <div class="prod-slider-wrap">
                    <div class="prod-slider">
                        <ul class="prod-slider-car">
                            <li>
                                 <Link data-fancybox-group="popup-product" class="fancy-img"  to="http://placehold.it/500x525">
                                    <img src="http://placehold.it/500x525" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-fancybox-group="popup-product" class="fancy-img"  to="http://placehold.it/500x591">
                                    <img src="http://placehold.it/500x591" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-fancybox-group="popup-product" class="fancy-img"  to="http://placehold.it/500x525">
                                    <img src="http://placehold.it/500x525" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-fancybox-group="popup-product" class="fancy-img"  to="http://placehold.it/500x722">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-fancybox-group="popup-product" class="fancy-img"  to="http://placehold.it/500x722">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-fancybox-group="popup-product" class="fancy-img"  to="http://placehold.it/500x722">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-fancybox-group="popup-product" class="fancy-img"  to="http://placehold.it/500x722">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="prod-thumbs">
                        <ul class="prod-thumbs-car">
                            <li>
                                 <Link data-slide-index="0"  to="#">
                                    <img src="http://placehold.it/500x525" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-slide-index="1"  to="#">
                                    <img src="http://placehold.it/500x591" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-slide-index="2"  to="#">
                                    <img src="http://placehold.it/500x525" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-slide-index="3"  to="#">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-slide-index="4"  to="#">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-slide-index="5"  to="#">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                            <li>
                                 <Link data-slide-index="6"  to="#">
                                    <img src="http://placehold.it/500x722" alt=""/>
                                 </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="prod-cont">
                    <p class="prod-actions">
                         <Link  to="#" class="prod-favorites"><i class="fa fa-heart"></i> Add to Wishlist </Link>
                         <Link  to="#" class="prod-compare"><i class="fa fa-bar-chart"></i> Compare </Link>
                    </p>
                    <div class="prod-skuwrap">
                        <p class="prod-skuttl">Color</p>
                        <ul class="prod-skucolor">
                            <li class="active">
                                <img src="img/color/blue.jpg" alt=""/>
                            </li>
                            <li>
                                <img src="img/color/red.jpg" alt=""/>
                            </li>
                            <li>
                                <img src="img/color/green.jpg" alt=""/>
                            </li>
                            <li>
                                <img src="img/color/yellow.jpg" alt=""/>
                            </li>
                            <li>
                                <img src="img/color/purple.jpg" alt=""/>
                            </li>
                        </ul>
                        <p class="prod-skuttl">Sizes</p>
                        <div class="offer-props-select">
                            <p>XL</p>
                            <ul>
                                <li> <Link  to="#">XS </Link></li>
                                <li> <Link  to="#">S </Link></li>
                                <li> <Link  to="#">M </Link></li>
                                <li class="active"> <Link  to="#">XL </Link></li>
                                <li> <Link  to="#">L </Link></li>
                                <li> <Link  to="#">4XL </Link></li>
                                <li> <Link  to="#">XXL </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="prod-info">
                        <p class="prod-price">
                            <b class="item_current_price">$238</b>
                        </p>
                        <p class="prod-qnt">
                            <input type="text" value="1"/   >
                             <Link  to="#" class="prod-plus"><i class="fa fa-angle-up"></i> </Link>
                             <Link  to="#" class="prod-minus"><i class="fa fa-angle-down"></i> </Link>
                        </p>
                        <p class="prod-addwrap">
                             <Link  to="#" class="prod-add">Add to cart </Link>
                        </p>
                    </div>
                    <ul class="prod-i-props">
                        <li>
                            <b>SKU</b> 05464207
                        </li>
                        <li>
                            <b>Manufacturer</b> Mayoral
                        </li>
                        <li>
                            <b>Material</b> Cotton
                        </li>
                        <li>
                            <b>Pattern Type</b> Print
                        </li>
                        <li>
                            <b>Wash</b> Colored
                        </li>
                        <li>
                            <b>Style</b> Cute
                        </li>
                        <li>
                            {/* <b>Color</b> Blue, Red */}
                        </li>
                        <li> <Link  to="#" class="prod-showprops">All Features </Link></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- Quick View Product - end --> */}
    </section>
</main> 
<Footer/>
            </div>
        );
    }
}

export default cataloglist;
