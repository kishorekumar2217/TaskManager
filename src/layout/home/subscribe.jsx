import React, { Component } from 'react';

export default class Subscribe extends Component {
  render() {
    return (
      <div class="container">
<div class="newsletter">
            <h3>Subscribe to us</h3>
            <p>Enter your email if you want to receive our news</p>
            <form action="#">
                <input placeholder="Your e-mail" type="text"/>
                <input name="OK" value="Subscribe" type="submit"/>
            </form>
        </div>


      </div>
    );
  }
}
