"use client";
import React, { useState } from "react";

type SideNavProps = {
  toggleNav: () => void;
};

const SideNav: React.FC<SideNavProps> = ({ toggleNav }) => {
  return (
    <div className="absolute top-0 left-0">
      <div className="text-gray-700 z-50 px-8 pt-4 font-bold text-2xl gap-12 fixed top-0 left-0 h-screen w-[60vw] bg-white">
        <button onClick={toggleNav} className="pb-12">
          x
        </button>
        <ul className="flex flex-col gap-4">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="absolute z-40 top-0 left-0 w-screen h-[3000px] overflow-hidden bg-black/70"
      />
    </div>
  );
};
export default SideNav;
