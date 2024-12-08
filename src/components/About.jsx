import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


function About() {
  return (
    <div className='about-section-container'>
         <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Food is an Essential Part of a Balanced Diet
        </h1>
        <p className="primary-text">
        A balanced diet is a diet that includes the right amount of nutrients, calories, and food groups to keep your body healthy.
        </p>
        <p className="primary-text">
        A balanced diet can help protect you from chronic disease and keep you in good health. 

        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>

    </div>
  )
}

export default About