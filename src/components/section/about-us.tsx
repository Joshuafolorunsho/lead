import { abel, acme } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-[1300px] m-auto py-10 grid grid-cols-1 lg:grid-cols-2 px-10 xl:px-0 gap-10 xl:gap-[92px] items-center">
      <div className="w-full lg:max-w-[630px]" data-aos="fade-up">
        <Image
          src={"/About_Img.svg"}
          alt=""
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="space-y-8">
        <h3 className={`text-[#DFB058] text-lg uppercase ${acme.className}`}>
          A bit about us
        </h3>
        <div
          className="space-y-3.5 lg:space-y-[30px]"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-once="false"
        >
          <h1
            className={`text-[#10111A] text-4xl lg:text-[52px] ${acme.className}`}
          >
            Our Mission
          </h1>
          <p className={`text-md lg:text-lg text-[#97918B] ${abel.className}`}>
            We envision a world where literacy is not a privilege but a
            universal right. By expanding access to literacy programs,
            resources, and opportunities, The Lead Foundation seeks to empower
            individuals of all ages and backgrounds to thrive. A literate
            population is not only more informed but also more confident,
            engaged, and capable of shaping their future.
          </p>
        </div>
        <div
          className="space-y-3.5 lg:space-y-[30px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1
            className={`text-[#10111A] text-4xl lg:text-[52px] ${acme.className}`}
          >
            Our Vision
          </h1>
          <p className={`text-md lg:text-lg text-[#97918B] ${abel.className}`}>
            We believe literacy goes beyond reading and writing—it&apos;s about
            the courage to use your voice. Our mission is to help individuals
            develop the skills and confidence to express themselves without
            fear. Through mentorship, community outreach, and training
            initiatives, The Lead Foundation creates supportive environments
            where people can learn, grow, and speak with clarity and confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
