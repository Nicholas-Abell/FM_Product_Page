import Image from "next/image";
import Carousel from "./components/Carousel";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Home() {
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
          <div className="flex items-center flex-col lg:flex-row">
            -0+
            <button className="bg-orange-400 text-white rounded-lg px-8 py-2 flex items-center justify-center gap-4 w-full lg:w-auto">
              <HiOutlineShoppingCart size={18} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
