import React from "react";
import Image from "next/image";
import shoeImg from "../../public/images/image-product-1.jpg";

type CarouselProps = {};

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <div className="w-full">
        
      <Image src={shoeImg} alt="product" className="w-full h-auto" />
    </div>
  );
};
export default Carousel;
