import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "./../../public/list.json";
import Card from "./Card";

function Freebook() {
  const filterList = list.filter((data) => data.catagory === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterList);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-bold text-xl pb-2">
        Free Offered Books
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Odit iusto eaque consectetur saepe deserunt reprehenderit. 
        Ratione eos quae labore nemo, quis natus. Beatae natus eius 
        voluptatem pariatur, corrupti id nulla.
      </p>
    
    <div>
    <Slider {...settings}>
        {filterList.map((item) => 
        <Card item={item} key= {item.id} /> )}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Freebook;
