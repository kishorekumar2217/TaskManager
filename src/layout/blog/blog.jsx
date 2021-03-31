import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (
            <div>
              <main>
    <section class="container">


        <ul class="b-crumbs">
            <li>
                <Link  to="index.html">
                    Home
                </Link>
            </li>
            <li>
                <span>Blog</span>
            </li>
        </ul>
        <h1 class="main-ttl main-ttl-categs"><span>Blog</span></h1>
        {/* <!-- Blog Categories --> */}
        <ul class="blog-categs">
            <li class="active"><Link  to="blog.html">All</Link></li>
            <li><Link  to="blog.html">News</Link></li>
            <li><Link  to="blog.html">Reviews</Link></li>
            <li><Link  to="blog.html">Articles</Link></li>
        </ul>
{/* 
        <!-- Blog Posts - start --> */}
        <div class="posts-list blog-page">
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>09</span> Jan</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Animi quaerat at</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit obcaecati quod veritatis vero!</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background:" url(http://placehold.it/360x203)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>15</span> Feb</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Ex atque commodi</Link></h3>
                <p>Obcaecati ratione, illo qui dignissimos excepturi non earum, sed tempore, amet at labore ullam unde delectus</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background:" url(http://placehold.it/360x224)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>21</span> Mar</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Hic quod maxime deserunt</Link></h3>
                <p>Aliquam soluta eveniet voluptas, nesciunt eius libero officiis officia eos consectetur ut velit natus</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/314x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>08</span> Apr</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Ipsum dolor sit amet</Link></h3>
                <p>Porro incidunt reprehenderit eaque? Sit nihil culpa ex quaerat nostrum ab</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background:" url(http://placehold.it/318x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>18</span> Jun</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Lorem ipsum dolor sit amet</Link></h3>
                <p>Nihil vel quod laboriosam perspiciatis nostrum nam quis optio, vitae autem, architecto pariatur quo</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>29</span> Jul</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Adipisci corporis velit</Link></h3>
                <p>Id vero tenetur sunt eligendi sequi adipisci similique sint corporis praesentium aliquam iusto maxime tempora eos non culpa</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background:" url(http://placehold.it/341x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>04</span> Aug</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Beatae nisi blanditiis</Link></h3>
                <p>Asperiores minus ipsam eaque saepe repellat libero earum mollitia cum tempore sint autem, magni, ducimus</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>14</span> Sep</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Dolorum vero mollitia</Link></h3>
                <p>Aliquid nesciunt amet officiis nemo numquam perferendis ipsam dolor ratione rerum quasi repellat officia distinctio quos</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>21</span> Oct</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Quasi corporis recusandae</Link></h3>
                <p>Officiis atque facilis corporis ipsum, sint totam doloremque quas laborum asperiores doloribus voluptatum</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background:" {{url(http://placehold.it/353x235)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>02</span> Nov</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Sit deleniti placeat quia aspernatur</Link></h3>
                <p>Sit nihil culpa ex quaerat nostrum ab. Aliquid nesciunt amet officiis nemo numquam perferendis ipsam dolor ratione</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>09</span> Dec</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Odit reprehenderit</Link></h3>
                <p>Id distinctio cum laboriosam sint atque culpa laborum eaque, quod porro esse hic, consectetur assumenda optio</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
            <div class="cf-sm-6 cf-lg-4 col-xs-6 col-sm-6 col-md-4 posts2-i">
                <Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
                <time class="posts-i-date" datetime="2017-01-01 12:00"><span>22</span> Jan</time>
                <h3 class="posts-i-ttl"><Link  to="post.html">Quibusdam officiis quas</Link></h3>
                <p>Suscipit alias cumque, totam iure ipsam voluptatibus ratione sed quam minima non laudantium</p>		<Link  to="post.html" class="posts-i-more">Read more...</Link>
            </div>
        </div>
        {/* <!-- Blog Posts - end --> */}

        {/* <!-- Pagination - start --> */}
        <ul class="pagi">
            <li class="active"><span>1</span></li>
            <li><Link  to="#">2</Link></li>
            <li><Link to="#">3</Link></li>
            <li><Link to="#">4</Link></li>
            <li class="pagi-next"><Link  to="#"><i class="fa fa-angle-double-right"></i></Link></li>
        </ul>
        {/* <!-- Pagination - end --> */}
    </section>
</main>  
            </div>
        );
    }
}

export default Blog;