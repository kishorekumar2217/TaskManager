import React from 'react'

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import StoreIcon from '@material-ui/icons/Store';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './slide.css';
import { Link } from 'react-router-dom';


const LoginT = () => {
  return (
    <div className="Logint">

      <div className="Login">

        <span style={{fontWeight:'bold', justifyContent:'center',whitespace: 'nowrap'}}>New Customer ?    <Link to="/login" style={{fontsize:'10px'}}>   Sign up </Link>  </span>
 
  
      </div>
      <hr />
      <div className="Login">
        <AccountCircleIcon />
        <span>Profile</span>
      </div>
      <hr />

      <div className="Login">
        <ShoppingBasketIcon />
        <span>Orders</span>
      </div>
      <hr />

      <div className="Login">
        <CardGiftcardIcon />
        <span>Gift Card</span>
      </div>
      <hr />

      <div className="Login">
        <StoreIcon />
        <span>Store</span>
      </div>
      <hr />

    </div>




  )
}

export default LoginT
