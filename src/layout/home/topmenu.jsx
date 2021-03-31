import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class TopMenu extends Component {
  render() {
    return (
 
   
    <div>
<div class="header-bottom">
<div class="container">
            <nav class="topmenu">
            {/* <!-- Catalog menu - start --> */}
                <div class="topcatalog">
                    <Link class="topcatalog-btn" to="/cataloglist"><span>All</span> catalog</Link>
                    <ul class="topcatalog-list">
                        <li>
                            <Link to="/cataloglist">
                                Women
                            </Link>
                            <i class="fa fa-angle-right"></i>
                            <ul>
                                <li>
                                    <Link to="/cataloglist">
                                        Knitwear
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Dresses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Bags
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Shoulder Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Falabella
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Becks
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Clutches
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Travel Bags
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Accessories
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sunglasses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Tech Cases
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Jewelry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Stella
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Coats & Jackets
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/cataloglist">
                                Men
                            </Link>
                            <i class="fa fa-angle-right"></i>
                            <ul>
                                <li>
                                    <Link to="/cataloglist">
                                        Jackets & Blazers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Pants & Shorts
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Accessories
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sunglasses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Other Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Suiting
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Shirts
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/cataloglist">
                                Kids
                            </Link>
                            <i class="fa fa-angle-right"></i>
                            <ul>
                                <li>
                                    <Link to="/cataloglist">
                                        Girls
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Outerwear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                T-Shirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Blouses & Shirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Pants & Shorts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sleepwear & Underwear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Skirts
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Boys
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Shoes & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Jumpers & Cardigans
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Shirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Outerwear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Swimwear
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Baby
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Baby Sets
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Dresses & All-In-One
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Pants & Shorts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Shoes & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                T-shirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Outerwear
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/cataloglist">
                                Shoes
                            </Link>
                            <i class="fa fa-angle-right"></i>
                            <ul>
                                <li>
                                    <Link to="/cataloglist">
                                        Women
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Elyse
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Odette
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Brody
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Flats
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sandals
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Men
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Casual Shoes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sneakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sandals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Boots
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Mules & Clogs
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Children's
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                Girls
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Boys
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/cataloglist">
                                        Baby Shoe
                                    </Link>
                                    <i class="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <Link to="/cataloglist">
                                                First Walkers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sneakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Boots
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cataloglist">
                                                Sandals & Clogs
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* <!-- Catalog menu - end --> */}


                {/* <!-- Main menu - start --> */}
                <button type="button" class="mainmenu-btn">Menu</button>

                <ul class="mainmenu">
                    <li>
                        <Link to="/" class="active">
                            Home
                        </Link>
                    </li>
                    <li class="menu-item-has-children">
                        <Link>
                            Catalog <i class="fa fa-angle-down"></i>
                        </Link>
                        <ul class="sub-menu">
                            <li>
                                <Link to= "/cataloglist">
                                    Catalog List 
                                </Link>
                            </li>
                           
                            <li>
                                <Link to="/Gallery">
                                    Catalog Gallery 
                                </Link>
                            </li>
                          
                            <li>
                                <Link to="catalog-table.html">
                                    Catalog Table
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <Link to="/mainproduct">
                            Product 
                        </Link>
                      
                    </li>   
                    <li>
                        <Link to="/element">
                            Elements
                        </Link>
                    </li>
                    <li >
                        <Link to="/Mainblog">
                            Blog
                        </Link>
                        <ul class="sub-menu">
                            
                           
                           
                    
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <Link to="#">
                            Pages <i class="fa fa-angle-down"></i>
                        </Link>
                        <ul class="sub-menu">
                            <li>
                                <Link to="/login">
                                    Contacts
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    Cart
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="auth.html">
                                    Authorization
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/compare">
                                    Compare
                                </Link>
                            </li>
                            <li>
                                <Link to="/wishlist">
                                    Wishlist
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="404.html">
                                    Error 404
                                </Link>
                            </li> */}
                        </ul>
                    </li>
                    <li class="mainmenu-more">
                        <span>...</span>
                        <ul class="mainmenu-sub"></ul>
                    </li>
                </ul>
                {/* <!-- Main menu - end --> */}

                {/* <!-- Search - start --> */}
                <div class="topsearch">
                    <Link id="topsearch-btn" class="topsearch-btn" to="#"><i class="fa fa-search"></i></Link>
                    <form class="topsearch-form" action="#">
                        <input type="text" placeholder="Search products"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                {/* <!-- Search - end --> */}


</nav>

</div>
</div>





        </div>
        


    );
  }
}
