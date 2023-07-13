import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SocialbarCards from './Cards/SocialbarCards';

const Socialbar: React.FC = () => {
  return (
    <div className="flex flex-col py-3 sm:flex-row sm:justify-between sm:px-8  text-white bg-purple-600 ">
      <div className="flex justify-center hover:cursor-pointer sm:justify-start sm:pl-5 ">
        <SocialbarCards Icon={FacebookIcon} />
        <SocialbarCards Icon={InstagramIcon} />
        <SocialbarCards Icon={TwitterIcon} />
        <SocialbarCards Icon={WhatsAppIcon} />
      </div>
      <div className="flex flex-wrap justify-center gap-2 py-4 hover:cursor-pointer sm:justify-end sm:pr-5 ">
        <SocialbarCards Icon={PhoneIcon} title="0000 - 123456789" />
        <SocialbarCards Icon={MailIcon} title="info@example.com" />
      </div>
    </div>
  );
};

export default Socialbar;
