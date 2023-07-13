import React from 'react';

interface ContactCardPropsTypes {
  Icon: React.ElementType;
  title: string;
  Info: string;
  SubInfo: string;
}

export const ContactCard: React.FC<ContactCardPropsTypes> = ({
  Icon,
  title,
  Info,
  SubInfo,
}) => {
  return (
    <div className="flex flex-col justify-center items-center border w-[320px] h:[180px] rounded py-8   ">
      <div className="  rounded-lg  text-purple-900 hover:text-white hover:bg-purple-900">
        <Icon />
      </div>
      <div>
        <p className=" text-purple-950 text-center font-Nunito  text-2xl font-semibold leading-8 text-dark-primary ">
          {title}
        </p>
        <p className=" text-purple-950 text-center  font-Lato text-base font-normal leading-6 text-dark-secondary ">
          {Info}
        </p>
        <p className=" text-purple-950 text-center  font-Lato text-base font-normal leading-6 text-dark-secondary ">
          {SubInfo}
        </p>
      </div>
    </div>
  );
};
