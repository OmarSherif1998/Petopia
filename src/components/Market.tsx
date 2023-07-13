import MarketCards from './Cards/MarketCards';
import EastIcon from '@mui/icons-material/East';
export const Market = () => {
  return (
    <div className="  my-16 ml-64 lg:ml-2  ">
      <MarketCards
        Icon={EastIcon}
        dog1="dog1.png"
        dog2="dog2.png"
        dog3="dog3.png"
        title1="Сheck Out Our Specials"
        title2="Luxury Fashion Collection"
        title3="Shop What’s Trending"
        describtion="Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis "
        discount="Up to 40% Off"
        buttonText="Shop Now"
      />
    </div>
  );
};
