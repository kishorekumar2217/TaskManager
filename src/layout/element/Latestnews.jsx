import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Latestnews extends Component {
    render() {
        return (
            <main>
            <section class="container stylization maincont">
                 <div class="posts-wrap">
            <h3 class="component-ttl component-ttl-ct component-ttl-hasdesc"><span>Latest news</span></h3>
            <p class="component-desc component-desc-ct">Nisi autem error aspernatur tempora veritatis temporibus</p>
            <div class="posts-list">
                <div class="posts-i">
                    <Link class="posts-i-img"  to="post.html">
                        <span style={{background: "url(../assets/img/news/1.jpg)"}}></span>
                    </Link>
                    <time class="posts-i-date" datetime="2016-11-09 00:00:00"><span>30</span> Jan</time>
                    <div class="posts-i-info">
                        <Link  to="blog.html" class="posts-i-ctg">Reviews</Link>
                        <h3 class="posts-i-ttl">
                            <Link  to="post.html">Animi quaerat at</Link>
                        </h3>
                    </div>
                </div>
                <div class="posts-i">
                    <Link class="posts-i-img"  to="post.html">
                        <span style={{background:" url(../assets/img/news/2.jpg)"}}></span>
                    </Link>
                    <time class="posts-i-date" datetime="2016-11-09 00:00:00"><span>29</span> Jan</time>
                    <div class="posts-i-info">
                        <Link  to="blog.html" class="posts-i-ctg">Articles</Link>
                        <h3 class="posts-i-ttl">
                            <Link  to="post.html">Ex atque commodi</Link>
                        </h3>
                    </div>
                </div>
                <div class="posts-i">
                    <Link class="posts-i-img"  to="post.html">
                        <span style={{background:"url(../assets/img/news/3.jpg)"}}></span>
                    </Link>
                    <time class="posts-i-date" datetime="2016-11-09 00:00:00"><span>25</span> Jan</time>
                    <div class="posts-i-info">
                        <Link  to="blog.html" class="posts-i-ctg">News</Link>
                        <h3 class="posts-i-ttl">
                            <Link  to="post.html">Hic quod maxime deserunt</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </main>
        );
    }
}

export default Latestnews;