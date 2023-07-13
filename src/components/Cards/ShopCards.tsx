interface ShopCardsPropsTypes {
  Icon: React.ElementType;
  image: string;

  productDesc: string;
  price: string;
}
const ShopCards: React.FC<ShopCardsPropsTypes> = ({
  Icon,
  image,
  productDesc,
  price,
}) => {
  return (
    <div className="ShopCard flex gap-x-2 border border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white ">
      <div>
        <img
          src={require(`../../images/${image}`)}
          alt=""
          className="w-[100px] h-full "
        />
      </div>
      <div>
        <p className=" font-Lato text-xl font-extrabold w-2/3 ">
          {productDesc}
        </p>
        <p className=" text-amber-400">
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
        </p>
        <p> {price}</p>
      </div>
    </div>
  );
};

export default ShopCards;
