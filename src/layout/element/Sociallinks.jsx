import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sociallinks extends Component {
    render() {
        return (
            <main>
            <section class="container stylization maincont">
                <div class="social-wrap">
            <h3 class="component-ttl component-ttl-ct"><span>Social links</span></h3>
            <div class="social-list">
                <div class="social-i">
                    <Link rel="nofollow" target="_blank"  to="http://facebook.com/">
                        <p class="social-i-img">
                            <i class="fa fa-facebook"></i>
                        </p>
                        <p class="social-i-ttl">Facebook</p>
                    </Link>
                </div>
                <div class="social-i">
                    <Link rel="nofollow" target="_blank"  to="http://google.com/">
                        <p class="social-i-img">
                            <i class="fa fa-google-plus"></i>
                        </p>
                        <p class="social-i-ttl">Google +</p>
                    </Link>
                </div>
                <div class="social-i">
                    <Link rel="nofollow" target="_blank"  to="http://twitter.com/">
                        <p class="social-i-img">
                            <i class="fa fa-twitter"></i>
                        </p>
                        <p class="social-i-ttl">Twitter</p>
                    </Link>
                </div>
                <div class="social-i">
                    <Link rel="nofollow" target="_blank"  to="http://vk.com/">
                        <p class="social-i-img">
                            <i class="fa fa-vk"></i>
                        </p>
                        <p class="social-i-ttl">Vkontakte</p>
                    </Link>
                </div>
                <div class="social-i">
                    <Link rel="nofollow" target="_blank"  to="http://instagram.com/">
                        <p class="social-i-img">
                            <i class="fa fa-instagram"></i>
                        </p>
                        <p class="social-i-ttl">Instagram</p>
                    </Link>
                </div>
                <div class="social-i">
                    <Link rel="nofollow" target="_blank"  to="http://youtube.com/">
                        <p class="social-i-img">
                            <i class="fa fa-youtube"></i>
                        </p>
                        <p class="social-i-ttl">Youtube</p>
                    </Link>
                </div>
            </div>
        </div>  
           </section>
           </main>
        );
    }
}

export default Sociallinks;