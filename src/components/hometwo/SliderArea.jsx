import React,{ useEffect, useState } from 'react';
import Slider from "react-slick";
import "magnific-popup";
import $ from "jquery";
import 'animate.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const SliderArea = () => {
  const apiLink = process.env.REACT_APP_API_LINK;

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${apiLink}/api/v1/slider/`)
    .then(response => response.json())
    .then(data => {setItems(data);})
    .catch(err => console.log(err))

    // $('.popup-video').magnificPopup({
		// 	type: 'iframe'
		// });
  
  }, [])
    const settings={
      
      slidesToShow: 1,
      speed:500,
      arrows:false,
      autoplay:true,
      responsive: [
          {
              breakpoint: 1800,
              settings: {
                autoplay:true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed:500,
                  infinite: true,
              }
          },
          {
              breakpoint: 1500,
              settings: {
                autoplay:true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed:500,
                  infinite: true,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                autoplay:true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed:500,
                  arrows: true,
                  infinite: true,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  speed:500,
                  arrows: true,
                  autoplay:true,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  speed:500,
                  slidesToScroll: 1,
                  arrows: true,
              }
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed:500,
                  autoplay:true,
                  arrows: true,
              }
          },
      ]

  }

  return (
   
    <section className="slider-area slider-bg" style={{ backgroundImage:'url("../../img/banner/s_slider_bg.jpg")' }}>
        <Slider className="slider-active" {...settings}>
        {
            items.map((elem) => {
              const { movie, slider_image } = elem;
              return (
                <div className="slider-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
                 
                  <div className="slider-img text-center text-lg-right animate__animated animate__fadeInRight"  data-delay="1s">
                 
                    <img src={slider_image} className='img-fluid' style={{ width: '100%' }} alt="" />
                    
                  </div>
                 
                 
                </div>
                <div className="col-lg-6">
               
                <div className="banner-content">
                   
                    <h2 className="title animate__animated animate__fadeInUp"  data-delay=".4s">{movie.title}</h2>
                  
                    
                    <div className="banner-meta animate__animated animate__fadeInUp"  data-delay=".6s">
                      <ul>
                        <li className="quality">
                          <span>{movie.rating}</span>
                          <span>{movie.movie_quality}</span>
                        </li>
                        <li className="category">
                          {movie.genre}
                        </li>
                        <li className="release-time">
                          <span><i className="far fa-calendar-alt" /> {movie.year_released}</span>
                          <span><i className="far fa-clock" /> {movie.duration}</span>
                        </li>
                      </ul>
                    </div>
                 
                  
                  
                    <Link to={"/movie-details/"+movie.slug} className="banner-btn btn popup-video"   data-animation="fadeInUp" data-delay=".8s"><i className="fas fa-play" /> Watch Now</Link>
                  

                    </div>
                
                </div>
              </div>
            </div>
          </div>
              );
            })
          }
        </Slider>
      </section>
  )
}

export default SliderArea