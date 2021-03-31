import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  images from './slid.jpg';
import  image from './slide1.jpg';
import  image2 from './slide2.jpg';
import image3 from './slide3.jpg';


const Slider =()=>{
  return (
    <main >
     <section class="container" >
     <div class="fr-slider-wrap">
            <div class="fr-slider">
<Carousel>
  <Carousel.Item interval={2000}>
    <img style={{width:'100%',height:"420px"}}
      
      src={image3}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>MEGA SALE -30%</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
 
 style={{width:'100%',height:"420px"}}
      src={image}
      alt="Second slide"
    />
 

    <Carousel.Caption>
    <h3>NEW COLLECTION</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
   style={{width:'100%',height:"420px"}}
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
   
                            <h3>SUMMER TRENDS</h3>
                            {/* <p>Winter collection for women's. <br>We all have choices for you. Check it out!</p>
                            <p class="fr-slider-more-wrap">
                                <a class="fr-slider-more" href="#">View collection</a>
                            </p> */}
                        
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
 </div>
 </section>
    </main>
  )
}
export default Slider;