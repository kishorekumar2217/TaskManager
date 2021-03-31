import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
// import { useForm } from './useForm.js';

const Items = () => {
    // const initialValues = {
    //     size: "s",
       
    //   };
    // const [values, setValues] = useState(initialValues);
    // const handleInputChange = (e,initialValues) => {
    //     const { name, value } = e.target;
    //     setValues({
    //       ...values,
    //       [name]: value,
    //     });
        
      
       
    //   };


    const [cart, setCart] = useState(() => {
        const localData =
            localStorage.getItem('cart');
        return localData !== null
            ? JSON.parse(localData)
            : [];
         
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    
    const [count, setCount] = useState();
    const [product,setproduct] = useState([
        {
            name: 'abcd',
            price: 10,
            image: '../assets/img/catalog/a1.jpg',
            image1: '../assets/img/catalog/a2.jpg',
            image2: '../assets/img/catalog/a3.jpg',
            image3: '../assets/img/catalog/a4.jpg',
            count: 2
        },
        {
            name: 'xxx',
            price: 20,
            image: '../assets/img/catalog/b1.jpg',
            image1: '../assets/img/catalog/b2.jpg',
            image2: '../assets/img/catalog/b4.jpg',
            image3: '../assets/img/catalog/b5.jpg',
            count: 1
        },

    ]

    )

    const addProduct = (product) => {
    
        // console.log("size is",values.size)
        

// console.log(product)
// cart.forEach(item => {item.size}
            
// });


        setCart([...cart, product]);
      
        setCount( cart.length)
console.log(count)
           
    }
    return (
        <div>
            <div class="prod-items section-items prod-list2">


                {

                    product.map((item, index) =>
                    (

                        <div class="prodlist-i" key={index}>
                            <Link class="list-img-carousel prodlist-i-img" to="product.html">
                                <img src={item.image} alt="Adipisci aperiam commodi" />
                                <img src={item.image1} alt="Adipisci aperiam commodi" />
                                <img src={item.image2} alt="Adipisci aperiam commodi" />
                                <img src={item.image3} alt="Adipisci aperiam commodi" />
                            </Link>
                            <div class="prodlist-i-cont">
                                <h3> {item.name} </h3>
                                <p class="prodlist-i-info">
                                    <Link to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                                    <Link to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                                    <Link class="prodlist-i-compare" to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                                </p>
                                <div class="prodlist-i-txt">
                                    Quisquam totam quas veritatis dolor voluptates, laudantium repellendus. Cupiditate repellat tempora consequatur sequi, neque                        </div>
                                <div class="prodlist-i-action">
                                    <span class="prodlist-i-price">
                                        <b>{item.price}</b>
                                    </span>
                                    <p class="prodlist-i-qnt">
                                        <input value="1" type="text" />
                                        <Link to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                        <Link to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                                    </p>
                                    <p class="prodlist-i-addwrap">
                                        <button class="prodlist-i-add" onClick={() => addProduct(item)}> Add to cart</button>
                                    </p>
                                </div>
                                <div class="prodlist-i-skuwrap">
                                    <div class="prodlist-i-skuitem">
                                        <p class="prodlist-i-skuttl">Color</p>
                                        <ul class="prodlist-i-skucolor">
                                            <li class="active"><img src="../assets/img/color/blue.jpg" alt="" /></li>
                                            <li><img src="../assets/img/color/red.jpg" alt="" /></li>
                                            <li><img src="../assets/img/color/green.jpg" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div class="prodlist-i-skuitem">
                                        <p class="prodlist-i-skuttl">Clothes sizes</p>
                                        <div>
                                            <select name="size" >
                                                <option value="S ">S </option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option class="active" value="XS">XS</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="XXXL">XXXL</option>

                                            </select>
                                            {/* <DropdownButton
                                 alignRight
                                  title="Dropdown right"
                                   id="dropdown-menu-align-right"
                                
                                            >
                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                                            </DropdownButton> */}
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
                    )
                    )
                }







                {/* 
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
</div> */}
            </div>

            {/* <!-- Pagination - start --> */}
        </div>
    );

}

export default Items;