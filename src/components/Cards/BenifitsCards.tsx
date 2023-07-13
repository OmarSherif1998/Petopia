import React from 'react';

interface BenifitsCardsProps {
  Icon: React.ElementType;
  title?: string;
  subtitle?: string;
}

const BenifitsCards: React.FC<BenifitsCardsProps> = ({
  Icon,
  title,
  subtitle,
}) => {
  return (
    <div className="flex gap-3 flex-wrap items-center   ">
      <Icon />
      <div className=" flex-col text-black gap-3  ">
        <p className=" font-bold ">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default BenifitsCards;
