import ShopCards from './Cards/ShopCards';
import { shopCards } from '../db/data';

export const Shop = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-x-8 gap-y-3 justify-center items-center border border-purple-950 p-5 my-5">
      <p className="text-purple-900 font-Nunito text-2xl font-extrabold underline">
        Featured Products:
      </p>
      <p className="text-purple-900 font-Nunito text-2xl font-extrabold underline">
        On Sale Products:
      </p>
      <p className="text-purple-900 font-Nunito text-2xl font-extrabold underline">
        Top Rated Products:
      </p>

      {shopCards.map((card, index) => (
        <ShopCards
          key={index}
          Icon={card.Icon}
          image={card.image}
          productDesc={card.productDesc}
          price={card.price}
        />
      ))}
    </div>
  );
};
