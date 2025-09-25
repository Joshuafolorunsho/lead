"use client";

import React from "react";
import CardNav from "../CardNav";

const TopNav = () => {
  const items = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: {
        label: "Home",
        href: "/",
        ariaLabel: "Home",
      },
    },
    {
      label: "Testimonials",
      bgColor: "#170D27",
      textColor: "#fff",
      links: {
        label: "testimonial",
        href: "/testimonials",
        ariaLabel: "Testimonials",
      },
    },
    {
      label: "About us",
      bgColor: "#271E37",
      textColor: "#fff",
      links: {
        label: "About us",
        href: "/#about-us",
        ariaLabel: "About us",
      },
      // {
      //   label: "Twitter",
      //   href: "https://twitter.com/leadfoundation",
      //   ariaLabel: "Twitter",
      // },
      // {
      //   label: "LinkedIn",
      //   href: "https://linkedin.com/company/leadfoundation",
      //   ariaLabel: "LinkedIn",
      // },
    },
  ];
  return (
    // <div className=" sticky top-0 z-50 bg-white">
    //   <div className="py-3 flex items-center justify-between max-w-[1300px] px-10 mx-auto ">
    //     <div>
    //       <Link href={"/"}>
    //         <Image
    //           src={"/Logo.svg"}
    //           width={100}
    //           height={100}
    //           alt="Logo"
    //           className="w-10 h-10 lg:w-16 lg:h-16"
    //         />
    //       </Link>
    //     </div>
    //     <div className="py-2.5 lg:flex items-center gap-10 hidden ">
    //       {/* <div className="font-medium text-sm">About Us</div> */}
    //       <Link
    //         href={"/"}
    //         className={`font-medium text-sm lg:text-md ${acme.className}`}
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         href={"/testimonials"}
    //         className={`font-medium text-sm lg:text-md text-md ${acme.className}`}
    //       >
    //         Testimonials
    //       </Link>
    //       <Link
    //         href={"/#about-us"}
    //         className={`font-medium text-sm lg:text-mds text-md ${acme.className}`}
    //       >
    //         About us
    //       </Link>
    //       {/* <div className="font-medium text-sm">Testimonials</div> */}
    //     </div>
    //     <Hamburger className="lg:hidden " size={32} />
    //   </div>

    //   <div className="h-2.5 bg-[#1577BE]"></div>
    // </div>
    <CardNav
      logo="/Logo.svg"
      logoAlt="LEAD Foundation"
      baseColor="#fff"
      menuColor="#000"
      items={items}
    />
  );
};

export default TopNav;
