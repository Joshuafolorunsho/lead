import React from "react";
import { inter, manrope } from "@/app/fonts";
import Link from "next/link";

const Community = () => {
  return (
    <div className="bg-[#063979] bg-[url(/movement-bg.png)] bg-cover bg-center py-[50px] px-7 lg:px-0">
      <div className="text-white m-auto max-w-[752px] text-center space-y-5 ">
        <h1
          className={`text-xl lg:text-2xl font-extrabold uppercase  ${manrope.className}`}
        >
          Be Part of the Movement
        </h1>
        <div className="space-y-2.5">
          <p
            className={`text-md lg:text-lg font-light italic ${inter.className}`}
          >
            Together, we can bridge the literacy gap and empower voices.
          </p>
          <p className={`text-base lg:text-lg ${inter.className}`}>
            Whether you&apos;re a volunteer, partner, or supporter, your role in
            our community helps drive change. Join us in creating opportunities
            for people to learn, grow, and confidently express themselves.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link
          className={`h-9 px-4 py-2 rounded-md bg-[#F6FDFF] border-[#5083C2] font-semibold cursor-pointer text-[#5083c2] hover:bg-[#D9F1FF] hover:border-[#5083C2]`}
          href={`https://wa.me/+2348065817154?text=${"I want to be a member of LEAD foundation. My name is"}`}
          target="_blank"
        >
          Join the Community
        </Link>
      </div>
    </div>
  );
};

export default Community;
