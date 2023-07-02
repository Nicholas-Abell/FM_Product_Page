import React from "react";

type ModalProps = {};

const Modal: React.FC<ModalProps> = () => {
  return (
    <div className="w-full lg:w-[320px] absolute lg:fixed top-36 lg:top-20 lg:right-0 z-30 px-2">
      <div className="w-full bg-white rounded-lg shadow-lg shadow-gray-400">
        <h2 className=" border-b border-gray-400 font-bold p-12 lg:p-2 text-2xl lg:text-base">
          Cart
        </h2>
        <p className="text-center text-gray-500 py-24 lg:py-6 text-2xl lg:text-base">
          Your cart is empty
        </p>
      </div>
    </div>
  );
};
export default Modal;
