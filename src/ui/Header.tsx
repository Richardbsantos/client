import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cartImg, logoDark } from "../assets/index";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

interface NavigationItem {
  title: string;
  link: string;
}

const navigation: NavigationItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Promoção",
    link: "/offers",
  },
  {
    title: "Contato",
    link: "/contact",
  },
];

interface HeaderLinkProps {
  item: NavigationItem;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="text-base text-black font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
    >
      {item.title}
    </Link>
  );
};

const Header: React.FC = () => {
  const productData: any = useSelector((state: any) => state.bazar.productData);
  const userInfo: any = useSelector((state: any) => state.bazar.userInfo);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/">
          <img src={logoDark} alt="logoDark" className="w-28" />
        </Link>
        {/* Search */}
       <div className="hidden md:flex items-center justify-center flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar produtos"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
          />
          <button className="px-4 py-3 bg-blue-500 text-white rounded-r-md focus:outline-none focus:bg-blue-600">
            <FiSearch />
          </button>
        </div>
        {/* Right nav */}
        <div>
          <div className="hidden md:inline-flex items-center gap-x-8">
            {navigation.map((item) => (
              <HeaderLink key={item.title} item={item} />
            ))}
            <Link to={"/cart"} className="relative">
              <img src={cartImg} alt="cartImg" className="w-6" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length ? productData?.length : 0}
              </span>
            </Link>
            <Link to="/login">
              <img
                className="w-8 h-8 rounded-full"
                src={
                  userInfo
                    ? userInfo.image
                    : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="userLogo"
              />
            </Link>

            {userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                {userInfo.name}
              </p>
            )}
          </div>
          <button className="md:hidden">
            <FiMenu className="w-6 h-6 text-gray-950" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
