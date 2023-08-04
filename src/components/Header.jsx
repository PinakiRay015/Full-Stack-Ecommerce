import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <div className="bg-black text-white flex justify-evenly py-4 items-center">
      <div>
        <h2 className="text-4xl font-black">MY.STORE</h2>
      </div>
      <div className="flex gap-6 text-lg font-bold">
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
      </div>
    </div>
  );
};

export default Header;
