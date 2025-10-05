import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    return (
      <div>
        <h2 className='text-7xl'>Get Our Membership</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {pricingData.map((pricing) => (
            // <PricingCard pricing={pricing} key={pricing.id}></PricingCard>
            <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>
          ))}
        </div>
      </div>
    );
};

export default PricingOptions;