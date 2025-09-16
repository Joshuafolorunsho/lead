"use client";
import Image from "next/image";
import { acme } from "@/app/fonts";

const Footer = () => {
  return (
    <footer className="">
      <div className="h-2.5 bg-[#1577BE]"></div>
      <div className="max-w-[1300px] m-auto py-14 flex flex-col lg:flex-row items-center justify-between px-10 xl:px-0">
        <Image
          src={"/Logo.svg"}
          alt=""
          width={100}
          height={100}
          className="w-20 h-20"
        />
        <h1
          className={`${acme.className} text-[3rem] lg:text-[4rem] text-center uppercase`}
        >
          Lead Foundation
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
