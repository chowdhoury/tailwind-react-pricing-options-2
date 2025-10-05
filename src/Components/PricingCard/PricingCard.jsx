import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  return (
    <div className="border-2 border-white bg-amber-500 text-black rounded-2xl p-5 flex flex-col">
      <h2 className="text-7xl">{pricing.name}</h2>
      <h4 className="text-3xl">{pricing.price}</h4>
      <div className="bg-amber-400 p-4 rounded-2xl mt-5 flex-1">
        <p>{pricing.description}</p>
        {pricing.features.map((feature, index) => (
          <PricingFeatures feature={feature} key={index}></PricingFeatures>
        ))}
      </div>
        <button className="btn w-full mt-10">Subscribe</button>
    </div>
  );
};

export default PricingCard;
