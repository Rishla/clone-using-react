import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import { RiStarHalfFill } from "react-icons/ri";
import Profile from "../assets/aishaa (2).png"

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        See what our customers have to say! Discover how our meals have made a positive impact on their health and lifestyle.
        </p>
      </div>

      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          These meals have been a game-changer for my busy schedule. They’re nutritious, filling, and taste amazing!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h3>John Doe</h3>
      </div>

      <div className="testimonial-section-bottom">
        <img src={Profile} alt="" style={{width:'140px',height:"140px"}} />
        <p>
        Absolutely love the meals! They’re fresh, delicious, and make healthy eating so easy. Delivery is always on time too!        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <RiStarHalfFill />
        </div>
        <h3>Aisha S</h3>
      </div>

    </div>
  );
};

export default Testimonial;