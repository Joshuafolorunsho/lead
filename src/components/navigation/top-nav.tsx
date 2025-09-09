import { Hamburger } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div>
      <div className="py-3 flex items-center justify-between max-w-[1300px] px-10 mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              src={"/Logo.svg"}
              width={100}
              height={100}
              alt="Logo"
              className="w-16 h-16"
            />
          </Link>
        </div>
        <div className="py-2.5 lg:flex items-center gap-10 hidden ">
          <div className="font-medium text-sm">About Us</div>
          <div className="font-medium text-sm">Testimonials</div>
          <div className="font-medium text-sm">Testimonials</div>
        </div>
        <Hamburger className="lg:hidden" />
      </div>

      <div className="h-2.5 bg-[#1577BE]"></div>
    </div>
  );
};

export default TopNav;
