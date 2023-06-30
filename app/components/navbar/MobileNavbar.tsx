"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import profileImg from "../../../public/images/image-avatar.png";
import Image from "next/image";
import SideNav from "./SideNav";
import Modal from "../cart/Modal";

type MobileNavbarProps = {};

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleNav = () => {
    if (!sideNavOpen) {
      document.body.style.overflow = "hidden";
      setSideNavOpen(true);
    } else {
      setSideNavOpen(false), (document.body.style.overflow = "scroll");
    }
  };

  return (
    <nav className="z-30 bg-white w-full py-8 px-12 lg:hidden flex justify-between items-center">
      {sideNavOpen && <SideNav toggleNav={toggleNav} />}
      <div className="flex justify-center items-center gap-4">
        <GiHamburgerMenu
          onClick={toggleNav}
          size={25}
          className="text-gray-500 hover:cursor-pointer hover:text-black"
        />
        <h2 className="font-bold text-2xl mr-8 text-black">sneakers</h2>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-4">
          <HiOutlineShoppingCart size={25} />
          <Image src={profileImg} alt="profile" className="w-[28px] h-[28px]" />
        </div>
      </div>
    </nav>
  );
};
export default MobileNavbar;
