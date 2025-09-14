import Image from "next/image";
import React from "react";
import { acme, poppins } from "../fonts";
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      title: "Build Reading & Speaking Confidence: ",
      body: "Practical methods to strengthen your reading ability and improve public speaking confidence.",
    },
    {
      title: "Personal Development Blueprint: ",
      body: "We invest in the latest dental technology to provide the best care.",
    },
    {
      title: "Fun & Engaging Learning: ",
      body: "Take part in word games, grammar tests, and diction classes that make learning enjoyable and effective.",
    },
    {
      title: "Networking & Communication: ",
      body: "Connect with peers and mentors, building valuable relationships while improving your communication skills.",
    },
    {
      title: "Recognition & Rewards: ",
      body: "Access bonus classes, earn a certificate of completion, and receive awards that celebrate your growth.",
    },
    {
      title: "Author a Book in 21 Days: ",
      body: "Turn your ideas into reality by writing and completing a book within just 21 days.",
    },
    {
      title: "Learn an International Language: ",
      body: "Expand your opportunities and cultural awareness by gaining skills in a new language.",
    },
  ];

  return (
    <div className="max-w-[1300px] m-auto py-12 items-center px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
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
            <div
              key={index}
              className="flex gap-5 "
              data-aos="fade-up"
              // data-aos-delay={`${(index + 1) * 100}`}
            >
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
      <div className="w-full max-w-xl content-center " data-aos="zoom-in-up">
        <Image
          src={"/highlight.svg"}
          alt=""
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Highlights;
