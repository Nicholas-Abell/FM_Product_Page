import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="hidden lg:fixed w-full border-b-2 py-8 lg:flex justify-center items-center">
      <h2 className="font-bold text-2xl mr-8">sneakers</h2>
      <ul className="flex justify-center items-center gap-4">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex justify-center items-center">
        <>shopping cart</>
        <>icon</>
      </div>
    </nav>
  );
};
export default Navbar;
