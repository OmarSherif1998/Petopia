import React from 'react';
import { ContactCardData } from '../db/data';
import { ContactCard } from './Cards/ContactCard';
export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center  my-10 py-10 w-full bg-contactClr">
      <div className=" flex flex-col gap-y-5 py-5">
        <p className="text-purple-700 font-Nunito text-base font-bold leading-5">
          Our Contact
        </p>
        <p className="text-center font-Nunito text-6xl font-extrabold leading-10">
          Contacts
        </p>
        <p className="text-center font-Lato text-base font-normal leading-6">
          Massa enim nec dui nunc mattis enim ut tellus
        </p>
      </div>

      <div className="flex gap-5  ">
        {ContactCardData.map((card, index) => (
          <ContactCard
            key={index}
            Icon={card.Icon}
            title={card.Title}
            Info={card.Info}
            SubInfo={card.SubInfo}
          />
        ))}
      </div>
    </div>
  );
};
