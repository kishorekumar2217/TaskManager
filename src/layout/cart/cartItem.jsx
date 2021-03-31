import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const [cart, setCart] = useState(() => {
        const localData =
            localStorage.getItem('cart');
        return localData !== null
            ? JSON.parse(localData)
            : [];
    });
    console.log("cart", cart)


    const onremove = (index) => {
        console.log("index is", index)
        let store = (JSON.parse(localStorage.getItem('cart'))) ? JSON.parse(localStorage.getItem('cart')) : []
        store.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(store));
        setCart(store)
    }
    const clear = () => {
        localStorage.clear();
        let store = (JSON.parse(localStorage.getItem('cart'))) ? JSON.parse(localStorage.getItem('cart')) : []
        setCart(store)
    }


    const totalSum = () => {
        return cart.reduce((sum, { price ,count }) => sum + (price * count), 0);
    }

    return (
        <div>
            <section class="container stylization maincont">


                <ul class="b-crumbs">
                    <li>
                        <Link to="/">
                            Home
        </Link>
                    </li>
                    <li>
                        <span>Cart</span>
                    </li>
                </ul>
                <h1 class="main-ttl"><span>Cart</span></h1>

                <form action="#">

                    <div class="cart-items-wrap">
                        <table class="cart-items">
                            <thead>
                                <tr>
                                    <td class="cart-image">Photo</td>
                                    <td class="cart-ttl">Products</td>
                                    <td class="cart-price">Price</td>
                                    <td class="cart-quantity">Quantity</td>
                                    <td class="cart-summ">Summ</td>
                                    <td class="cart-del">&nbsp;</td>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    cart.map((item, index) => (


                                        <tr key={index}>

                                            <td class="cart-image">
                                                <Link to="product.html">
                                                    <img src={item.image} alt="Similique delectus totam" />
                                                </Link>
                                            </td>
                                            <td class="cart-ttl">
                                                <Link to="product.html">{item.name}</Link>
                                                <p>Color: Red</p>
                                                <p>Size: M</p>
                                            </td>
                                            <td class="cart-price">
                                                <b>${item.price}</b>
                                            </td>
                                            <td class="cart-quantity">
                                            <b>{item.count}</b>
                                            </td>
                                            <td class="cart-summ">
                                                <b>{item.price * item.count}</b>
                                                <p class="cart-forone">unit price <b></b></p>
                                            </td>
                                            <td class="cart-del">
                                                <Link onClick={() => onremove(index)} class="cart-remove" />
                                            </td>
                                        </tr>

                                    ))}




                                {/* <tr>



            
                <td class="cart-image">
                    <Link  to="product.html">
                        <img src="../assets/img/realated/2.jpg" alt="Eveniet nobis minus"/>
                    </Link>
                </td>
                <td class="cart-ttl">
                    <Link  to="product.html">Eveniet nobis minus</Link>
                </td>
                <td class="cart-price">
                    <b>$150</b>
                </td>
                <td class="cart-quantity">
                    <p class="cart-qnt">
                        <input value="1" type="text"/>
                        <Link  to="#" class="cart-plus"><i class="fa fa-angle-up"></i></Link>
                        <Link  to="#" class="cart-minus"><i class="fa fa-angle-down"></i></Link>
                    </p>
                </td>
                <td class="cart-summ">
                    <b>$150</b>
                    <p class="cart-forone">unit price <b>$150</b></p>
                </td>
                <td class="cart-del">
                    <Link  to="#" class="cart-remove"></Link>
                </td>
            </tr>
            <tr>
                <td class="cart-image">
                    <Link  to="product.html">
                        <img src="../assets/img/realated/3.jpg" alt="Quod soluta corrupti"/>
                    </Link>
                </td>
                <td class="cart-ttl">
                    <Link  to="product.html">Quod soluta corrupti</Link>
                </td>
                <td class="cart-price">
                    <b>$195</b>
                </td>
                <td class="cart-quantity">
                    <p class="cart-qnt">
                        <input value="1" type="text"/>
                        <Link  to="#" class="cart-plus"><i class="fa fa-angle-up"></i></Link>
                        <Link  to="#" class="cart-minus"><i class="fa fa-angle-down"></i></Link>
                    </p>
                </td>
                <td class="cart-summ">
                    <b>$195</b>
                    <p class="cart-forone">unit price <b>$195</b></p>
                </td>
                <td class="cart-del">
                    <Link  to="#" class="cart-remove"></Link>
                </td>
            </tr>
            <tr>
                <td class="cart-image">
                    <Link  to="product.html">
                        <img src="../assets/img/realated/5.jpg" alt="Perferendis recusandae"/>
                    </Link>
                </td>
                <td class="cart-ttl">
                    <Link  to="product.html">Perferendis recusandae</Link>
                    <p>Color: Blue</p>
                    <p>Size: XS</p>
                </td>
                <td class="cart-price">
                    <b>$250</b>
                </td>
                <td class="cart-quantity">
                    <p class="cart-qnt">
                        <input value="1" type="text"/>
                        <Link  to="#" class="cart-plus"><i class="fa fa-angle-up"></i></Link>
                        <Link  to="#" class="cart-minus"><i class="fa fa-angle-down"></i></Link>
                    </p>
                </td>
                <td class="cart-summ">
                    <b>$250</b>
                    <p class="cart-forone">unit price <b>$250</b></p>
                </td>
                <td class="cart-del">
                    <Link  to="#" class="cart-remove"></Link>
                </td>
            </tr>
           */}



                            </tbody>
                        </table>
                    </div>
                    <ul class="cart-total">
                        <li class="cart-summ">TOTAL: <b>${totalSum()}   </b></li>
                    </ul>
                    <div class="cart-submit">
                        <div class="cart-coupon">
                            <input placeholder="your coupon" type="text" />
                            <Link class="cart-coupon-btn" to="#"><img src="../assets/img/ok.png" alt="your coupon" /></Link>
                        </div>
                        <Link to="#" class="cart-submit-btn">Checkout</Link>
                        <Link onClick={() => clear()} to="#" class="cart-clear">Clear cart</Link>
                    </div>
                </form>


            </section>



        </div>
    );

}
export default CartItem;