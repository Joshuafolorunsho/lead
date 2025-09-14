import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { manrope } from "@/app/fonts";
import Link from "next/link";

const MainSection = () => {
  return (
    <div className="py-12 lg:py-20 pt-[100px] lg:pt-[120px] bg-[#F7FBFF] flex items-center ">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1300px] px-10 mx-auto"
        data-aos="zoom-in"
      >
        <div className="space-y-5">
          <h1
            className={`text-3xl lg:text-5xl xl:text-6xl text-shadow-[#DFB058] text-shadow-2xs text-[#5083C2] font-semibold ${manrope.className}`}
          >
            Empowering Communities Through Literacy & Expression
          </h1>

          <p
            className={`text-[#5083C2] text-sm lg:text-lg leading-5 lg:leading-7 ${manrope.className}`}
          >
            At The Learners Education and Development Found or The LEAD
            Foundation, we champion literacy as a pathway to self-expression and
            opportunity. From local outreach programs to global initiatives, we
            work with communities, partners, and volunteers to create lasting
            impact and empower voices worldwide.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href={"/highlights"}
              className={`bg-linear-to-b from-[#9EB0CA] to-[#63758B] cursor-pointer ${buttonVariants()}`}
            >
              Explore Highlights
            </Link>
            {/* <Button
              className="border-[#9EB0CA] bg-transparent text-[#9EB0CA] cursor-pointer hover:text-[#9EB0CA]"
              variant={"outline"}
            >
              Contact Us
            </Button> */}
          </div>
        </div>

        <div className="w-full max-w-xl content-center ">
          <Image
            alt="main-image"
            src={"/get.svg"}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
