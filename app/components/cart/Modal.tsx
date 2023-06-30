import React from "react";

type ModalProps = {};

const Modal: React.FC<ModalProps> = () => {
  return (
    <div className="w-full absolute top-36 left-0 z-30 px-2">
      <div className="w-full bg-white rounded-lg">
        <h2 className=" border-b border-gray-400 font-bold p-12 text-2xl">
          Cart
        </h2>
        <p className="text-center text-gray-500 py-24 text-2xl">
          Your cart is empty
        </p>
      </div>
    </div>
  );
};
export default Modal;
