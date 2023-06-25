import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import profileImg from "../../../public/images/image-avatar.png";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="hidden lg:fixed w-full lg:flex px-24">
      <div className=" border-b-2 py-8 w-full flex justify-between items-center">
        <ul className="flex justify-center items-center gap-4 text-gray-400">
          <h2 className="font-bold text-2xl mr-8 text-black">sneakers</h2>
          <li className="hover:cursor-pointer">Collections</li>
          <li className="hover:cursor-pointer">Men</li>
          <li className="hover:cursor-pointer">Women</li>
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Contact</li>
        </ul>
        <div className="flex justify-center items-center gap-4">
          <HiOutlineShoppingCart size={25} />
          <Image src={profileImg} alt="profile" className="w-[28px] h-[28px]" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
