import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel1 from '../../creative-agency-main/images/carousel-1.png'
import carousel2 from '../../creative-agency-main/images/carousel-2.png'
import carousel3 from '../../creative-agency-main/images/carousel-3.png'
import carousel4 from '../../creative-agency-main/images/carousel-4.png'
import carousel5 from '../../creative-agency-main/images/carousel-5.png'

const SlickCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const slideImg = {
    borderRadius: "10px",
    height: "336px",
    width: "100%",
    padding: "20px"
  }
  const slideData =[carousel1,carousel2,carousel3,carousel4,carousel5]
  return (
    <Slider {...settings}>
        {
            slideData.map((data,index) => 
                <div key={index}>
                    <img src={data} alt="" style={slideImg}/>
                </div>
                )
        }
    </Slider>
  );
};

export default SlickCarousel;
