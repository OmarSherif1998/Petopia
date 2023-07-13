import React, { FormEvent } from 'react';
import dog14 from '../images/dog14.png';
import dog13 from '../images/dog13.png';

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); // Prevents the default form submission behavior
}
export const SubForm = () => {
  return (
    <div className=" subForm flex items-center w-[1372px] h-[507px] p-5 my-8">
      <div>
        <img src={dog14} alt="" />
      </div>
      <div className="flec flex-col">
        <p className="text-white text-center font-Nunito text-4xl font-extrabold leading-tight">
          Get 20% Off Your First Purchase When You Use Petco Credit Card{' '}
        </p>
        <p className="text-white text-center font-Lato text-base font-normal leading-6">
          Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
          Ligula ullamcorper malesuada proin libero nunc consequat interdum
          varius sit.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex px-3 py-5 gap-4 justify-center"
        >
          <input
            placeholder="Type your E-mail"
            className=" border w-[319px] h-[70px] bg-transparent rounded text-center "
          />
          <button className="  w-[219px] h-[70px] bg-amber-400 rounded">
            Subscribe
          </button>
        </form>
      </div>
      <div>
        <img src={dog13} alt="" />
      </div>
    </div>
  );
};
