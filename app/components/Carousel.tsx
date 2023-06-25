import React from "react";
import Image from "next/image";
import shoeImg from "../../public/images/image-product-1.jpg";
import shoeImgThumbnail from "../../public/images/image-product-1-thumbnail.jpg";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";

type CarouselProps = {};

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 p-32">
      <div className="w-full relative">
        <BiSolidChevronLeftCircle
          size={50}
          className="lg:hidden z-10 absolute left-0 top-[50%] text-white hover:cursor-pointer hover:text-gray-300"
        />
        <Image src={shoeImg} alt="product" className="h-auto rounded-lg" />
        <BiSolidChevronRightCircle
          size={50}
          className="lg:hidden z-10 absolute right-0 top-[50%] text-white hover:cursor-pointer hover:text-gray-300"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <Image src={shoeImgThumbnail} alt="thumbnail" className="rounded-lg" />
        <Image src={shoeImgThumbnail} alt="thumbnail" className="rounded-lg" />
        <Image src={shoeImgThumbnail} alt="thumbnail" className="rounded-lg" />
        <Image src={shoeImgThumbnail} alt="thumbnail" className="rounded-lg" />
      </div>
    </div>
  );
};
export default Carousel;
