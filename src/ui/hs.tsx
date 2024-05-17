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
    title: "Minha conta",
    link: "/conta",
  },
];

const categories = [
  {
    title: "Eletrônicos",
    subcategories: ["Celulares", "Computadores", "Televisores"],
  },
  {
    title: "Roupas",
    subcategories: ["Masculino", "Feminino", "Infantil"],
  },
  {
    title: "Casa",
    subcategories: ["Móveis", "Decoração", "Eletrodomésticos"],
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

interface CategoryProps {
  category: {
    title: string;
    subcategories: string[];
  };
}

const CategoryDropdown: React.FC<CategoryProps> = ({ category }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <button className="text-base text-black font-semibold hover:text-orange-700 cursor-pointer duration-300">
        {category.title}
      </button>
      {dropdown && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          {category.subcategories.map((subcategory) => (
            <Link
              to={`/category/${subcategory}`}
              key={subcategory}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {subcategory}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const productData: any = useSelector((state: any) => state.loja.productData);
  const userInfo: any = useSelector((state: any) => state.loja.userInfo);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="w-full bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col">
        {/* Top Header */}
        <div className="h-20 flex items-center justify-between px-4">
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

        {/* Bottom Header - Categories */}
        <section className="bottom-header w-full border-t-[1px] border-t-gray-200">
          <div className="interface max-w-screen-xl mx-auto px-4 py-2">
            <nav className="flex justify-start space-x-8">
              {categories.map((category) => (
                <CategoryDropdown key={category.title} category={category} />
              ))}
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
<div class="vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--menu">
  <section class="vtex-store-components-3-x-container ph3 ph5-m ph2-xl mw9 center ">
    <div class="flex mt0 mb0 pt0 pb0   
     justify-start vtex-flex-layout-0-x-flexRowContent vtex-flex-layout-0-x-flexRowContent--menu items-stretch w-100">
      <div class="pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth   flex" style="width: 15%;">
        <div class="vtex-flex-layout-0-x-flexCol vtex-flex-layout-0-x-flexCol--header-entrega  ml0 mr0 pl0 pr0      
        flex flex-column h-100 w-100">
          </div>
          </div>
          <div class="pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth   flex" style="width: 85%;">
            <div class="vtex-flex-layout-0-x-flexCol  ml0 mr0 pl0 pr0    justify-center  flex flex-column h-100 w-100">
              <div class="vtex-flex-layout-0-x-flexColChild pb0" style="height: auto;">
                <nav class="vtex-menu-2-x-menuContainerNav vtex-menu-2-x-menuContainerNav--menu-header">
                  <ul class="vtex-menu-2-x-menuContainer vtex-menu-2-x-menuContainer--menu-header list flex pl0 mv0 flex-row">
                    <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-categorias vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-categorias vtex-menu-2-x-menuItem--menu-item vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item-categorias--isClosed vtex-menu-2-x-menuItem--menu-item--isClosed">
                      <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-categorias vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                        <span class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-categorias vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                          <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-categorias vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">
                            Categorias</div>
                            </span></div>
                            </li>
                            <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item--isClosed">
                            <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                              <a href="/smartphones/smartphones/apple" id="menu-item-iphone" blockclass="menu-item" title="iPhone" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                                <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">
                                  iPhone
                                  </div>
                                  </a>
                                  </div>
                                  </li>
                                  <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item--isClosed">
                                    <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                                    <span class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">
                                        Samsung</div></span>
                                        </div>
                                          </li>
                                            <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item--isClosed">
                                              <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                                                <a href="/smartphones/smartphones/motorola" id="menu-item-motorola" blockclass="menu-item" title="Motorola" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                                                  <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">
                                                    Motorola</div></a></div></li><li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item-no-submenu--isClosed">
                                                      <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                                                        <a href="/148?map=productClusterIds&amp;order=OrderByTopSaleDESC" id="menu-item-smartphones-novos-no-submenu" blockclass="menu-item-no-submenu" __editoritemtitle="Smartwatches" additionaldef="none" texttype="t-body" orientation="horizontal" type="internal" tagtitle="Smartphones novos" title="Smartwatches" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer">
                                                          <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">
                                                            Smartwatches
                                                            </div>
                                                            </a>
                                                            </div>
                                                            </li>
                                                            <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item-no-submenu--isClosed">
                                                              <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                                                                <a href="/tablets" id="menu-item-tablets-no-submenu" blockclass="menu-item-no-submenu" title="Tablets" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer">
                                                                <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">
                                                                  Tablets</div>
                                                                  </a>
                                                                  </div>
                                                                  </li>
                                                                  <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item-no-submenu--isClosed">
                                                                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                                                                    <a href="/informatica" id="menu-item-informatica-no-submenu" blockclass="menu-item-no-submenu" title="Informática" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer">
                                                                    <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">Informática</div></a></div></li><li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu vtex-menu-2-x-menuItem--isClosed vtex-menu-2-x-menuItem--menu-item-no-submenu--isClosed"><div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                                                                      <a href="/smartphones/acessorios-para-smartphones" id="menu-item-acessorios-no-submenu" blockclass="menu-item-no-submenu" title="Acessórios" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer"><div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">Acessórios</div></a></div></li><li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu vtex-menu-2-x-menuItem--isOpen vtex-menu-2-x-menuItem--menu-item-no-submenu--isOpen"><div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5"><a href="" id="menu-item-outlet-no-submenu" blockclass="menu-item-no-submenu" type="internal" tagtitle="Outlet" title="" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu vtex-menu-2-x-styledLink--highlight vtex-menu-2-x-styledLink--menu-item-no-submenu--highlight no-underline pointer t-body c-emphasis pointer">
                                                              <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">
                                                      Outlet</div></a></div></li></ul></nav></div></div></div></div></section></div>









<div class="vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--menu">
  <section class="vtex-store-components-3-x-container ph3 ph5-m ph2-xl mw9 center">
    <div class="flex mt0 mb0 pt0 pb0 justify-start vtex-flex-layout-0-x-flexRowContent vtex-flex-layout-0-x-flexRowContent--menu items-stretch w-100">
       {/* Sidebar Menu  (15% Width)*/}
      <div class="pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth flex" >
        <div class="vtex-flex-layout-0-x-flexCol vtex-flex-layout-0-x-flexCol--header-entrega ml0 mr0 pl0 pr0 flex flex-column h-100 w-100">
            {/* Sidebar Content Here */}
        </div>
      </div>
        {/* Main Menu */}
      <div class="pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth flex" >
        <div class="vtex-flex-layout-0-x-flexCol ml0 mr0 pl0 pr0 justify-center flex flex-column h-100 w-100">
          <div class="vtex-flex-layout-0-x-flexColChild pb0" >
            <nav class="vtex-menu-2-x-menuContainerNav vtex-menu-2-x-menuContainerNav--menu-header">
              <ul class="vtex-menu-2-x-menuContainer vtex-menu-2-x-menuContainer--menu-header list flex pl0 mv0 flex-row">
                  {/* Categoria Item */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-categorias vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-categorias vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                    <span class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-categorias vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-categorias vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">Categorias</div>
                    </span>
                  </div>
                </li>
                  {/* iPhone Item */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                    <a href="/smartphones/smartphones/apple" id="menu-item-iphone" blockclass="menu-item" title="iPhone" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">iPhone</div>
                    </a>
                  </div>
                </li>
                 {/* Samsung Item */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                    <span class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">Samsung</div>
                    </span>
                  </div>
                </li>
                 {/* Motorola Item */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item mh6 pv5">
                    <a href="/smartphones/smartphones/motorola" id="menu-item-motorola" blockclass="menu-item" title="Motorola" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item flex justify-between nowrap">Motorola</div>
                    </a>
                  </div>
                </li>
                 {/* Smartwatches Item */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                    <a href="/148?map=productClusterIds&order=OrderByTopSaleDESC" id="menu-item-smartphones-novos-no-submenu" blockclass="menu-item-no-submenu" __editoritemtitle="Smartwatches" additionaldef="none" texttype="t-body" orientation="horizontal" type="internal" tagtitle="Smartphones novos" title="Smartwatches" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">Smartwatches</div>
                    </a>
                  </div>
                </li>
                 {/* Tablets Ite */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                    <a href="/tablets" id="menu-item-tablets-no-submenu" blockclass="menu-item-no-submenu" title="Tablets" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">Tablets</div>
                    </a>
                  </div>
                </li>
                 {/* Informática Item */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                    <a href="/informatica" id="menu-item-informatica-no-submenu" blockclass="menu-item-no-submenu" title="Informática" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">Informática</div>
                    </a>
                  </div>
                </li>
                 {/* Acessórios Ite */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem--isClosed">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                    <a href="/smartphones/acessorios-para-smartphones" id="menu-item-acessorios-no-submenu" blockclass="menu-item-no-submenu" title="Acessórios" rel="nofollow noopener" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu no-underline pointer t-body c-on-base pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">Acessórios</div>
                    </a>
                  </div>
                </li>
                 {/*-- Outlet Item a */}
                <li class="vtex-menu-2-x-menuItem vtex-menu-2-x-menuItem--menu-item-no-submenu list vtex-menu-2-x-menuItem--isOpen">
                  <div class="vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-item-no-submenu mh6 pv5">
                    <a href="" id="menu-item-outlet-no-submenu" blockclass="menu-item-no-submenu" type="internal" tagtitle="Outlet" title="" class="vtex-menu-2-x-styledLink vtex-menu-2-x-styledLink--menu-item-no-submenu vtex-menu-2-x-styledLink--highlight vtex-menu-2-x-styledLink--menu-item-no-submenu--highlight no-underline pointer t-body c-emphasis pointer">
                      <div class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-item-no-submenu flex justify-between nowrap">Outlet</div>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</div> 