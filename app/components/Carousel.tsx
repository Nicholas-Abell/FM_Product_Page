"use client";
import React, { useState } from "react";
import Image from "next/image";
import shoeImg from "../../public/images/image-product-1.jpg";
import shoeImgThumbnail from "../../public/images/image-product-1-thumbnail.jpg";
import shoeImage2 from "../../public/images/image-product-2.jpg";
import shoeImg2Thumbnail from "../../public/images/image-product-2-thumbnail.jpg";
import shoeImg3 from "../../public/images/image-product-3.jpg";
import shoeImg3Thumbnail from "../../public/images/image-product-3-thumbnail.jpg";
import shoeImg4 from "../../public/images/image-product-4.jpg";
import shoeImg4Thumbnail from "../../public/images/image-product-4-thumbnail.jpg";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";

type CarouselProps = {};

const Carousel: React.FC<CarouselProps> = () => {
  const [imageSlide, setImageSlide] = useState(1);
  const productList = [
    {
      id: 1,
      name: "product image 1",
      image: shoeImg,
      thumbNail: shoeImgThumbnail,
    },
    {
      id: 2,
      name: "product image 2",
      image: shoeImage2,
      thumbNail: shoeImg2Thumbnail,
    },
    {
      id: 3,
      name: "product image 3",
      image: shoeImg3,
      thumbNail: shoeImg3Thumbnail,
    },
    {
      id: 4,
      name: "product image 4",
      image: shoeImg4,
      thumbNail: shoeImg4Thumbnail,
    },
  ];

  const handleChevronClick = (x: number) => {
    setImageSlide((imageSlide) => imageSlide + x);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 lg:p-32">
git      <div className="w-full relative">
        <BiSolidChevronLeftCircle
          onClick={() => handleChevronClick(-1)}
          size={50}
          className={
            imageSlide === 1
              ? "hidden"
              : `lg:hidden z-10 absolute left-0 top-[50%] text-white hover:cursor-pointer hover:text-gray-300`
          }
        />
        <Image
          src={productList[imageSlide - 1]?.image}
          alt="product"
          className="h-auto rounded-lg"
        />
        <BiSolidChevronRightCircle
          onClick={() => handleChevronClick(1)}
          size={50}
          className={
            imageSlide == productList.length
              ? "hidden"
              : "lg:hidden z-10 absolute right-0 top-[50%] text-white hover:cursor-pointer hover:text-gray-300"
          }
        />
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {productList.map((product) => (
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
  );
};
export default Carousel;
