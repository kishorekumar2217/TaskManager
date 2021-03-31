import React, { Component } from 'react';
import loadjs from 'loadjs';

class Description extends Component {
    componentDidMount(){
        loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
    }
    render() {
        return (
            <div>
                <main>
	<section class="container">
    <ul class="b-crumbs">
			<li>
				<a href="index.html">
					Home
				</a>
			</li>
			<li>
				<a href="catalog-list.html">
					Catalog
				</a>
			</li>
			<li>
				<a href="catalog-list.html">
					Women
				</a>
			</li>
			<li>
				<span>Aperiam nihil veniam</span>
			</li>
		</ul>
        <div class="prod-wrap">
        <div class="prod-slider-wrap">
				<div class="prod-slider">
					<ul class="prod-slider-car">
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x642">
								<img src="http://placehold.it/500x642" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
					</ul>
				</div>
				<div class="prod-thumbs">
					<ul class="prod-thumbs-car">
						<li>
							<a data-slide-index="0" href="#">
								<img src="http://placehold.it/500x642" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="1" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="2" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="3" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="4" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="5" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="6" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="7" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
					</ul>
				</div>
			</div>

        </div>

            </section>
</main>
</div>
   )
    }
}
export default Description;