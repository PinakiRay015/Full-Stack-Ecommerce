import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="relative bg-black text-white flex justify-evenly py-4 items-center">
        <div>
          <h2 className="text-4xl font-black">MY.STORE</h2>
        </div>
        <div className={`hidden sm:flex gap-6 text-lg font-bold ${isMenuOpen ? "" : "hidden"}`}>
          <p>HOME</p>
          <p>ABOUT</p>
          <p>CATEGORY</p>
        </div>
        <div className="flex gap-6 text-xl text-purple-400">
          <p>
            <BiSearch />
          </p>
          <p>
            <AiOutlineHeart />
          </p>
          <p>
            <AiOutlineShoppingCart />
          </p>
          <p className="menu lg:hidden md:hidden sm:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose /> : <TiThMenuOutline />}
          </p>
        </div>
      </div>

      {isMenuOpen && (
        <div className="items text-lg font-bold bg-black text-white leading-10 px-7">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>CATEGORY</p>
        </div>
      )}
    </div>
  );
};

export default Header;
