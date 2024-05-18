import React from "react";
import { ImGithub } from "react-icons/im";
import {    
  FaInstagram,  
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { paymentLogo } from "../assets";

interface SocialLink {
  name: string;
  icon: JSX.Element;
  link: string;
}

const socialLinksArray: SocialLink[] = [
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/darcioserafimoficial" },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-3 text-base text-gray-400">
      {socialLinksArray.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-gray-700 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-[#949494] p-5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4">
        <div className="flex flex-col gap-7">
          <p className="text-white text-sm tracking-wide"> Formas de Pagamento</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <SocialLinks />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4"></h2>
          <div className="text-base flex flex-col gap-2">
            
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              Minha conta
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Ajuda & support
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
