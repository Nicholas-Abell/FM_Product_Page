import Image from "next/image";
import React from "react";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";

type LightBoxProps = {
  selectedImage: any;
  productList: any;
  imageSlide: number;
  setImageSlide: (args: number) => void;
  setLightBoxOpen: (args: boolean) => void;
  handleChevronClick: (args: number) => void;
};

const LightBox: React.FC<LightBoxProps> = ({
  selectedImage,
  productList,
  imageSlide,
  setImageSlide,
  setLightBoxOpen,
  handleChevronClick,
}) => {
  return (
    <div className="hidden w-screen h-screen bg-black/80 absolute top-0 left-0 z-[9999] lg:flex flex-col justify-center items-center gap-4">
      <button
        onClick={() => setLightBoxOpen(false)}
        className="text-right w-[30vw] text-white"
      >
        x
      </button>
      <div className="relative w-[30vw] justify-center flex flex-col items-center gap-4">
        <Image src={selectedImage} alt="x" className="rounded-lg w-full" />
        <BiSolidChevronLeftCircle
          onClick={() => handleChevronClick(-1)}
          size={50}
          className={
            imageSlide === 1
              ? "hidden"
              : "absolute top-[40%] left-[-5%] text-white hover:cursor-pointer"
          }
        />
        <BiSolidChevronRightCircle
          onClick={() => handleChevronClick(1)}
          size={50}
          className={
            imageSlide == productList.length
              ? "hidden"
              : "absolute top-[40%] right-[-5%] text-white hover:cursor-pointer"
          }
        />
        <div className="grid grid-cols-4 gap-4 items-center justify-between w-full">
          {productList.map((product: any) => (
            <Image
              onClick={() => setImageSlide(product.id)}
              src={product.thumbNail}
              alt={product.name}
              className={
                imageSlide === product.id
                  ? `rounded-lg opacity-30 border border-orange-600`
                  : `rounded-lg cursor-pointer`
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LightBox;
