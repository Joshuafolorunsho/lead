"use client";
import Image from "next/image";
import React from "react";
import Shuffle from "../Shuffle";
import { acme } from "@/app/fonts";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] m-auto mt-10 py-20 flex flex-col lg:flex-row items-center justify-between px-10 xl:px-0">
      <Image
        src={"/Logo.svg"}
        alt=""
        width={100}
        height={100}
        className="w-20 h-20"
      />
      <Shuffle
        text="Lead Foundation"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={3}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={false}
        triggerOnHover={true}
        respectReducedMotion={true}
        loop={true}
        tag="h1"
        // className={`text-black block ${acme.className}`}
        maxDelay={0}
        style={{ fontFamily: `${acme.style.fontFamily}` }}
      />
    </footer>
  );
};

export default Footer;
