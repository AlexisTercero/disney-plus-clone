import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
      return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>
    </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)` 
    margin-top: 20px;

    .slick-list {
        overflow: visible;
    }

`
const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;



    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;


        &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }

}

`