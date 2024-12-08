import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose balanced, nutritious meals that include a variety of vegetables, lean proteins, whole grains, and healthy fats.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Decide how many meals and snacks work best for your day. Eating regularly can help maintain energy and prevent overeating. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get your meals delivered quickly and fresh, so you can enjoy healthy food without the wait.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        A healthy diet rich in fruits, vegetables, whole grains and low-fat dairy can help to reduce your risk of heart disease by maintaining blood pressure and cholesterol levels. High blood pressure and cholesterol can be a symptom of too much salt and saturated fats in your diet.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;