import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  render() {
    return (
      <div> 
        <section class="container stylization maincont">


<ul class="b-crumbs">
    <li>
        <Link to="index.html">
            Home
         </Link>
    </li>
    <li>
        <span>Registration / Login</span>
    </li>
</ul>
<h1 class="main-ttl"><span>Registration / Login</span></h1>
<div class="auth-wrap">
    <div class="auth-col">
        <h2>Login</h2>
        <form method="post" class="login">
            <p>
                <label for="username">E-mail <span class="required">*</span></label><input type="text" id="username"/>
            </p>
            <p>
                <label for="password">Password <span class="required">*</span></label><input type="password" id="password"/>
            </p>
            <p class="auth-submit">
                <input type="submit" value="Login"/>
                <input type="checkbox" id="rememberme" value="forever"/>
                <label for="rememberme">Remember me</label>
            </p>
            <p class="auth-lost_password">
                <Link  to="#">Lost your password? </Link>
            </p>
        </form>
    </div>
    <div class="auth-col">
        <h2>Register</h2>
        <form method="post" class="register">
            <p>
                <label for="reg_email">Email <span class="required">*</span></label><input type="email" id="reg_email"/>
            </p>
            <p>
                <label for="reg_password">Password <span class="required">*</span></label><input type="password" id="reg_password"/>
            </p>
            <p class="auth-submit">
                <input type="submit" value="Register"/>
            </p>
        </form>
    </div>
</div>



</section>
      
      
      
      </div>
    );
  }
}
