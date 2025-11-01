import Image from "next/image";
import React from "react";
import { acme, poppins } from "../fonts";
import { Check } from "lucide-react";
import { Metadata } from "next";
import ReadersCohort from "@/components/section/readers-cohort";

export const metadata: Metadata = {
  title: "Highlights - The LEAD Foundation",
  description:
    "Build reading confidence, author a book in 21 days, learn international languages, and unlock your potential with our transformative program.",
  openGraph: {
    title: "Highlights - The LEAD Foundation",
    description:
      "Build reading confidence, author a book in 21 days, learn international languages, and unlock your potential with our transformative program.",
    type: "website",
  },
};
const Highlights = () => {
  const highlights = [
    // {
    //   title: "Build Reading & Speaking Confidence: ",
    //   body: "Discover simple, hands-on ways to boost your reading skills and feel more at ease when speaking in front of others.",
    // },
    // {
    //   title: "Personal Development Blueprint: ",
    //   body: "We invest in the latest dental technology to provide the best care.",
    // },
    // {
    //   title: "Fun & Engaging Learning: ",
    //   body: "Take part in word games, grammar tests, and diction classes that make learning enjoyable and effective.",
    // },
    // {
    //   title: "Networking & Communication: ",
    //   body: "Connect with peers and mentors, building valuable relationships while improving your communication skills.",
    // },
    // {
    //   title: "Recognition & Rewards: ",
    //   body: "Earn extra classes, celebrate your progress with certificates, and enjoy rewards that highlight your achievements.",
    // },
    // {
    //   title: "Author a Book in 21 Days: ",
    //   body: "Turn your ideas into reality by writing and completing a book within just 21 days.",
    // },
    // {
    //   title: "Learn an International Language: ",
    //   body: "Expand your opportunities and cultural awareness by gaining skills in a new language.",
    // },
    {
      body: "Discover your voice, build confidence, and lead with purpose.",
    },
    {
      body: "At the LEAD Foundation, we help individuals find clarity, grow in confidence, and communicate with excellence.",
    },
    {
      body: "We believe that when people speak with conviction and write with confidence, they become unstoppable leaders.",
    },
    {
      body: "Through our trainings, mentorships, and community outreaches, we are shaping voices, inspiring dreams, and transforming lives.",
    },
    {
      body: "Join us as we build a generation of confident communicators and purposeful leaders who make lasting impact.",
    },
  ];

  return (
    <div>
      <div className="max-w-[1300px] m-auto py-12 items-center px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-[100px] lg:pt-[120px] ">
        <div className="space-y-10">
          <div className="space-y-5" data-aos="zoom-in">
            <h3 className={`${acme.className} text-xl text-[#DFB058]`}>
              Unlock Your Potential in Just 21 Days
            </h3>
            <h1 className={`${poppins.className} text-4xl font-semibold`}>
              Program Highlights
            </h1>
          </div>

          <div className="space-y-[30px] ">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-5 " data-aos="fade-up">
                <div className="h-6 w-6 rounded-full bg-[#4591CA] flex items-center justify-center shrink-0">
                  <Check color="white" size={16} strokeWidth={2} />
                </div>
                <p className={`${poppins.className} text-xl m-0 leading-tight`}>
                  {/* <span className="font-bold">{highlight.title}</span>{" "} */}
                  {highlight.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full max-w-xl content-center hidden lg:block"
          data-aos="zoom-in-up"
        >
          <Image
            src={"/highlight.jpg"}
            alt=""
            width={2000}
            height={2000}
            className="w-full h-[400px] lg:h-[618px] object-cover rounded-3xl"
          />
        </div>
      </div>
      <ReadersCohort />
    </div>
  );
};

export default Highlights;
