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
    title: "venda seu aparelho",
    link: "/sale_cel",
  },
  {
    title: "Minha conta",
    link: "/login",
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
    <div className="w-full p-2 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-20 h-full mx-auto flex items-center justify-between px-4">
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
            className="px-60 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
          />
          <button className="px-4 py-3 bg-orange-700 text-white rounded-r-md focus:outline-none bg-orange-700">
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
        {/* linha do container */}
          <div className="container mx-auto mt-4 border-b border-gray-200">
          </div>
      <div className="max-w-screen-xl mx-auto flex justify-center mt-4">
        {/* Container de categorias */}
        <div className="flex items-center gap-x-9">
          <Link to="/Samsung" className="text-base font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Categoria
          </Link>
          {/* Link para categoria de iPhone */}
          <Link to="/iphones" className="text-base font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            iPhones
          </Link>
          {/* Adicione mais links de categoria aqui */}
          <Link to="/Samsung" className="text-base font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Samsung
          </Link>
          <Link to="/Motorola" className="text-base font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Motorola
          </Link>
          <Link to="/Smartwatches" className="text-base font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Smartwatches
          </Link>
          {/* Link para categoria de acessórios */}
          <Link to="/acessorios" className="text-base font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Acessórios
          </Link>
          <Link
            to="/Outlet"
            className="rounded-md bg-orange-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            OUTLET
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Header;
