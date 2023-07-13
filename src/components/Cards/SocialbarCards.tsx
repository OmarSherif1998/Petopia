import React from 'react';

interface SocialbarCardsProps {
  Icon: React.ElementType;
  title?: string;
  subtitle?: string;
}

const SocialbarCards: React.FC<SocialbarCardsProps> = ({ Icon, title }) => {
  return (
    <div className="flex gap-3 flex-wrap items-center   ">
      <Icon />
      <p className=" font-bold  ">{title}</p>
    </div>
  );
};

export default SocialbarCards;
