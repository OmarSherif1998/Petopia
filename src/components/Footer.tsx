import PhoneIcon from '@mui/icons-material/Phone';
import pets from '../images/pets.png';
import EastIcon from '@mui/icons-material/East';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SocialbarCards from '../components/Cards/SocialbarCards';
export const Footer = () => {
  return (
    <div
      className=" grid grid-cols-1 justify-items-center gap-5  md:grid-cols-4  md:h-[500]  
    md:items-baseline bg-footerClr  font-Nunito"
    >
      <div className="  pl-10 items-center ">
        <div className="flex flex-col items-start  gap-7">
          <div className=" flex flex-col gap-3">
            <img className=" object-contain" width={'80px'} src={pets} alt="" />
            <p className="text-indigo-900 font-Lato text-base font-normal leading-23 ">
              Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
              enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde
              ...
            </p>
          </div>
          <div className="flex  items-center">
            <div className="text-purple-500 ">
              <PhoneIcon fontSize="large" />
            </div>
            <div>
              <p className="text-purple-900 font-Nunito text-2xl font-extrabold">
                (913) 756-3126
              </p>
              <p className="text-purple-800 font-Lato text-base font-normal leading-6 ">
                Got Questions? Call us 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10  ">
        <p className="text-purple-500 font-Nunito text-2xl font-extrabold leading-6">
          Working Hours
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-y-8 text-purple-900 font-Lato text-base font-bold leading-6">
          <p>Mon - Fri:</p>
          <p>Saturday:</p>
          <p>Sunday:</p>
          <p>7am – 6pm</p>
          <p>9am – 4pm</p>
          <p>Closed</p>
        </div>
      </div>

      <div className="flex flex-col gap-10  ">
        <p className="text-purple-500 font-Nunito text-2xl font-extrabold leading-6">
          Useful Links
        </p>
        <div className="grid grid-cols-2 grid-rows-4 gap-y-8 text-purple-900 font-Lato text-base font-bold leading-6">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Shop</p>
          <p>FAQ</p>
          <p>Gallery</p>
          <p>Delivery</p>
          <p>Sales</p>
        </div>
      </div>

      <div className=" flex-col flex items-center gap-y-5">
        <div>
          <p className="text-purple-500  text-2xl font-extrabold leading-6">
            Newsletter
          </p>
        </div>
        <div>
          <p className="text-purple-900 font-Lato text-2xl font-base leading-6 w-64">
            Be first in the queue! Get our latest news straight to your inbox.
          </p>
        </div>

        <div className="flex gap-x-5">
          <input
            type="text"
            className=" border-none text-center  w-[240px] h-[50px]"
            placeholder="E-mail"
          />
          <button className=" bg-purple-600 rounded w-12 text-white">
            <EastIcon />
          </button>
        </div>

        <div className="flex gap-1 text-purple-600 justify-start">
          <SocialbarCards Icon={FacebookIcon} />
          <SocialbarCards Icon={InstagramIcon} />
          <SocialbarCards Icon={TwitterIcon} />
          <SocialbarCards Icon={WhatsAppIcon} />
        </div>
      </div>

      <div className=" text-center text-gray-700 font-Lato text-base font-normal leading-6 md:col-span-6  ">
        NOOT © All rights reserved Copyrights 2023
      </div>
    </div>
  );
};
