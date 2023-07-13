import { BenifitsCardsData } from '../db/data';
import BenifitsIcons from './Cards/BenifitsCards';
import { Contact } from './Contact';
import { BlogPost } from './BlogPost';
import { SubForm } from './SubForm';
import { Shop } from './Shop';
import { Services } from './Services';
import { Market } from './Market';

const Body: React.FC = () => {
  return (
    <div className="mainBody flex flex-col p-8 sm:pt-32 w-full sm:w-11/12 ml-24 items-center">
      <div className=" flex flex-col sm:flex-row ">
        <div className=" flex-col justify-center basis-full ">
          <div className="flex-col ">
            <p
              className=" 
              text-purple-600
                w-1/2 
                font-Nunito 
                text-base 
                font-bold 
                leading-5 
                uppercase "
            >
              We care for your pets
            </p>
            <p
              className=" 
              text-black 
              w-3/5 
              font-Nunito 
              text-7xl 
              font-extrabold 
              leading-15"
            >
              We Help You Care for Animals with Nutrition
            </p>
            <p
              className="
              text-black
                w-3/4
                font-medium
                leading-6
                py-5"
            >
              All offers are subject to availability. Ut tortor pretium viverra
              suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam
              at. Potenti nullam ac tortor vitae purus faucibus ornare.
            </p>
          </div>
          <div className="  flex flex-col  sm:flex-row flex-wrap w-8/9 gap-x-56 gap-y-8 items-center text-purple-600 font-Nunito pt-5 pb-5 text-xl">
            {BenifitsCardsData.map((item, index) => (
              <BenifitsIcons
                key={index}
                Icon={item.Icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
        <div className=" basis-full   ">
          <img src={require('../images/dog.png')} alt="" />
        </div>
      </div>
      <img
        src={require('../images/purpleBG.png')}
        alt=""
        className="my-64 max-w-full"
      />
      <Services />
      <Market />
      <Shop />
      <SubForm />
      <BlogPost />
      <Contact />
      <BlogPost />
    </div>
  );
};

export default Body;
