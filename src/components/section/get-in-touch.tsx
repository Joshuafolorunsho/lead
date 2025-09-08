import { Facebook, Instagram, Twitter, X } from "lucide-react";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="max-w-[1300px] m-auto flex flex-col lg:flex-row lg:items-center px-10 xl:px-0 gap-10">
      <div className="space-y-8">
        <h3 className="text-2xl">Get Started</h3>
        <h1 className="text-6xl lg:text-[90px] lg:leading-[100px]">
          Get in touch with us. We&apos;re here to assist you.
        </h1>
      </div>
      <div className="flex gap-5 lg:flex-col">
        <div className="w-14 h-14 rounded-full border border-[#B7B7B7] flex items-center justify-center">
          <Facebook />
        </div>
        <div className="w-14 h-14 rounded-full border border-[#B7B7B7] flex items-center justify-center">
          <Instagram />
        </div>
        <div className="w-14 h-14 rounded-full border border-[#B7B7B7] flex items-center justify-center">
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
