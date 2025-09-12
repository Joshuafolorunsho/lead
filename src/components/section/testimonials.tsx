import { abel, acme } from "@/app/fonts";
import React from "react";
import TestimonialSlider from "./testimonial-slider";

const Testimonial = () => {
  return (
    <div className="bg-[#F7FBFF] py-14 space-y-11 my-20">
      <div className="max-w-[1300px] m-auto px-10 xl:px-0 text-center space-y-2.5">
        <h1 className={`${acme.className} text-5xl `} data-aos="zoom-out">
          Our Members Feedback
        </h1>
        <p className={`${abel.className} text-3xl`} data-aos="fade-up">
          Don&apos;t take our word for it. Trust our members
        </p>
      </div>
      <div className="mt-10">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
