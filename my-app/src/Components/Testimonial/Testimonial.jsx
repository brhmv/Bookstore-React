import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img3 from "../Assets/home6/feedback_img_three.png";
import "./Testimonial.css";

const testimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: img3,
    },

    {
        id: 2,
        name: "Satya Narayan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: img3,
    },
    {
        id: 2,
        name: "Satya Narayan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: img3,
    },
    {
        id: 2,
        name: "Satya Narayan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: img3,
    },

];

function Test() {

    var settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
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


    return (
        <div className="sliders">
            <Slider {...settings}>
                {testimonialData.map(({ id, name, text, image }) => (
                    <div className="slide-item" key={id}>
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                        <p>{text}</p>
                        <hr />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Test;