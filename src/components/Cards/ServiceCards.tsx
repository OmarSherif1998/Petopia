interface ServiceCardsPropsTypes {
  Icon: React.ElementType;
  image: string;
  title: string;
  describtion: string;
  price?: string;
  buttonText: string;
}

const ServiceCards: React.FC<ServiceCardsPropsTypes> = ({
  Icon,
  image,
  title,
  describtion,
  price,
  buttonText,
}) => {
  return (
    <div className="group Cards border border-purple-600 rounded p-7 w-96 hover:bg-purple-600 hover:text-white hover:cursor-pointer">
      <div className="flex items-center gap-x-2  ">
        <img src={require(`../../images/${image}`)} alt="" />
        <p className="  text-2xl font-extrabold leading-7">{title}</p>
      </div>

      <div className="flex-col justify-start mt-4 ">
        <p className="  font-Lato text-lg font-normal leading-7">
          {describtion}
        </p>
        <p className="  font-Lato text-lg font-bold leading-7 mt-3">{price}</p>
        <button className="flex items-center gap-2 font-Nunito text-purple-600 text-base font-extrabold leading-7 mt-3  group-hover:text-ServiceClr">
          {buttonText}
          <Icon />
        </button>
      </div>
    </div>
  );
};

export default ServiceCards;
