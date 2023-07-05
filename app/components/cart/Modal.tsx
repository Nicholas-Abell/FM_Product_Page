"use client";
import React, { useState } from "react";

type ModalProps = { isOpen: boolean };

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="w-full lg:w-[400px] absolute lg:fixed top-36 lg:top-20 lg:right-10 z-30 px-2">
        <div className="w-full bg-white rounded-lg shadow-lg shadow-gray-400">
          <h2 className=" border-b border-gray-300 font-bold p-12 lg:p-6 text-2xl lg:text-base">
            Cart
          </h2>
          <p className="text-center text-gray-500 py-24 lg:py-24 text-2xl lg:text-base">
            Your cart is empty
          </p>
        </div>
      </div>
    )
  );
};
export default Modal;
