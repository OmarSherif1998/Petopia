import React from 'react';
import ServiceCards from './Cards/ServiceCards';
import { cardsData } from '../db/data';

export const Services = () => {
  return (
    <div className=" flex flex-col items-center gap-y-4">
      <div className="flex flex-col uppercase items-center">
        <p className="text-purple-600 font-Nunito text-base font-bold leading-5  ">
          our services
        </p>
        <p className="text-black  text-center font-Nunito text-4xl font-extrabold leading-12">
          All pet care services
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <ServiceCards
            key={index}
            Icon={card.Icon}
            image={card.image}
            title={card.title}
            describtion={card.describtion}
            price={card.price}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};
