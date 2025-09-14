import { acme, inter } from "@/app/fonts";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="max-w-[1300px] m-auto xl:mt-20 flex flex-col lg:flex-row lg:items-center px-10 xl:px-0 gap-10 my-20">
      <div className="space-y-8">
        <h3 className={`text-2xl ${inter.className}`}>Get Started</h3>
        <h1
          className={`text-5xl lg:text-[80px] lg:leading-[100px] ${acme.className}`}
          data-aos="flip-up"
        >
          Get in touch with us. We&apos;re here to assist you.
        </h1>
      </div>
      <div className="flex gap-5 lg:flex-col">
        <div data-aos="zoom-in-down" data-aos-delay="500">
          <div className="w-14 h-14 rounded-full border border-[#B7B7B7] flex items-center justify-center hover:bg-black hover:text-[#B7B7B7] cursor-pointer transition-colors duration-700 ease-in-out">
            <Facebook />
          </div>
        </div>
        <div data-aos="zoom-in-left" data-aos-delay="500">
          <div className="w-14 h-14 rounded-full border border-[#B7B7B7] flex items-center justify-center hover:bg-black hover:text-[#B7B7B7] cursor-pointer transition-colors duration-700 ease-in-out">
            <Instagram />
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="500">
          <div className="w-14 h-14 rounded-full border border-[#B7B7B7] flex items-center justify-center hover:bg-black hover:text-[#B7B7B7] cursor-pointer transition-colors duration-700 ease-in-out">
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
