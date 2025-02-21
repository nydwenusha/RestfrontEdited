import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeels } from './topMeel.js';
import CarouselItem from './CarouselItem.jsx';

const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrow:false
      };

  return (
    <div>
        <Slider {...settings}>
            {topMeels.map((item) => (
                <CarouselItem image={item.image} title={item.title}/>
            ))}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel
