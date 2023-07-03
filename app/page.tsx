"use client";
import Carousel from "./components/carousel/Carousel";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import { useShoppingCart } from "./context/ShoppingCartContext";

export default function Home() {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <main>
      <div className="flex flex-col lg:flex-row w-full lg:p-24 gap-8">
        <Carousel />
        <div className="w-full flex flex-col justify-center gap-4 px-6">
          <h3 className="text-orange-400 font-semibold uppercase">
            Sneaker Company
          </h3>
          <h2 className="font-bold text-3xl">
            Fall Limited Edition <br /> Sneakers
          </h2>
          <p className="text-gray-400">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex lg:flex-col justify-between">
            <div className="flex gap-4">
              <p className="font-bold text-3xl">$125.00</p>
              <div className="bg-orange-100 flex px-2 rounded justify-center items-center">
                <p className="text-orange-400 font-bold text-sm">50%</p>
              </div>
            </div>
            <p className="text-gray-300 line-through">$250.00</p>
          </div>
          <div className="flex items-center flex-col lg:flex-row w-full gap-4">
            <div className="grid grid-cols-3 w-full">
              <button
                onClick={() => {
                  if (itemQuantity === 0) return;
                  setItemQuantity((itemQuantity) => itemQuantity - 1);
                }}
                className="bg-gray-100 w-full text-3xl p-4 font-bold text-orange-400"
              >
                -
              </button>
              <button className="bg-gray-100 w-full text-3xl p-4 font-bold">
                {itemQuantity}
              </button>
              <button
                onClick={() =>
                  setItemQuantity((itemQuantity) => itemQuantity + 1)
                }
                className="bg-gray-100 w-full text-3xl p-4 font-bold text-orange-400"
              >
                +
              </button>
            </div>
            <button className="bg-orange-400 text-white text-sm rounded-lg px-8 py-4 flex items-center justify-center gap-2 xl::gap-4 w-full lg:w-auto whitespace-nowrap">
              <HiOutlineShoppingCart size={18} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
