interface MarketCardsPropsTypes {
  Icon: React.ElementType;
  dog1: string;
  dog2: string;
  dog3: string;
  title1: string;
  title2: string;
  title3: string;
  describtion: string;
  discount: string;
  buttonText: string;
}

const MarketCards: React.FC<MarketCardsPropsTypes> = ({
  Icon,
  dog1,
  dog2,
  dog3,
  title1,
  title2,
  title3,
  describtion,
  discount,
  buttonText,
}) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 grid-rows-2  gap-x-48 lg:gap-x-[450px] gap-y-5 ">
      <div className="w-[800px] h-[434.15px] bg-beig row-span-2 p-8 ">
        <div className="grid grid-cols-2 grid-rows-2 items-center">
          <div className=" row-span-2">
            <p className=" text-black font-Nunito text-3xl font-extrabold leading-12">
              {title1}
            </p>

            <p className=" w-[302px] text-green-900  font-Lato text-base  font-normal leading-6">
              {describtion}
            </p>

            <p className="text-purple-600 font-Nunito">
              {buttonText} <Icon />
            </p>
          </div>
          <div className=" row-span-2">
            <button className="border text-white  bg-purple-600 w-[225px] h-[70px] ml-36 rounded-md ">
              {discount}
            </button>
            <img
              src={require(`../../images/${dog1}`)}
              alt=""
              className="row-span-2"
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 justify-center p-8 grid-rows-2 w-[384px] h-[208px] bg-cyan">
        <div>
          <p className="  text-black font-Nunito text-lg font-extrabold leading-12">
            {' '}
            {title2}
          </p>
          <button className="text-purple-600 font-Nunito">{buttonText}</button>
        </div>
        <div>
          <img
            src={require(`../../images/${dog2}`)}
            alt=""
            className="h-[170px] object-contain"
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 justify-center p-8 grid-rows-2 w-[384px] h-[208px] bg-whitesmoke">
        <div>
          <p className="  text-black font-Nunito text-lg font-extrabold leading-12">
            {' '}
            {title3}
          </p>
          <button className="text-purple-600 font-Nunito">{buttonText}</button>
        </div>
        <div>
          <img
            src={require(`../../images/${dog3}`)}
            alt=""
            className="h-[170px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketCards;
