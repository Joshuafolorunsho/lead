import Image from "next/image";
import { acme } from "../fonts";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const page = () => {
  return (
    <div
      className={`pt-[100px] lg:pt-[120px] ${acme.className} pb-14 lg:pb-28 space-y-12 lg:space-y-24`}
    >
      <div
        className="h-[300px] lg:h-[500px] bg-[url(/aheader.jpg)] bg-black bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="z-20 relative text-center space-y-3 ">
          <h1 className="text-white text-4xl md:text-[56px]">What We Do</h1>
          <p className=" text-white text-sm md:text-lg md:w-1/2 w-3/4 m-auto opacity-82">
            We go beyond teaching English—we nurture confident communicators,
            bold thinkers, and purposeful leaders through our programs,
            workshops, and community outreaches.
          </p>
        </div>
      </div>

      <div className="max-w-[1300px] m-auto">
        <div className="  px-6 md:px-10 lg:px-14 space-y-10 md:space-y-20">
          <div className="flex flex-wrap gap-8 md:gap-16 items-center">
            <div
              className="md:w-1/2 w-full rounded-3xl overflow-clip"
              data-aos="fade-left"
            >
              <Image src={"/impact.jpg"} alt="" width={1000} height={1000} />
            </div>
            <div
              className="md:w-2/5 w-full space-y-3 lg:space-y-6"
              data-aos="fade-right"
            >
              <h1 className="text-2xl lg:text-4xl">Our Impact</h1>
              <p className=" text-[#737373D6] text-sm lg:text-base">
                Since 2020, we&apos;ve touched lives through ten impactful
                outreaches across schools, rural communities, and homes for
                orphans—helping hundreds find their confidence, sharpen their
                communication, and embrace personal growth.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse flex-wrap gap-8 md:gap-16 items-center">
            <div
              className="md:w-1/2 w-full rounded-3xl overflow-clip"
              data-aos="fade-right"
            >
              <Image
                src={"/initiative.jpg"}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div
              className="md:w-2/5 w-full space-y-3 lg:space-y-6"
              data-aos="fade-left"
            >
              <h1 className="text-2xl lg:text-4xl">
                Our Flagship Initiative: The Readers Cohort.
              </h1>
              <p className=" text-[#737373D6] text-sm lg:text-base">
                A transformative platform where members build reading habits,
                improve writing skills, and gain public speaking confidence
                —equipping them for personal and professional success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="max-w-[1300px] m-auto flex flex-wrap gap-6 lg:gap-0 items-center px-6 md:px-10 xl:px-0">
        <div className="lg:w-1/2 w-full" data-aos="fade-down">
          <Image src={"/founder.jpg"} alt="" width={1000} height={1000} />
        </div>
        <div className="lg:w-1/2 w-full lg:px-14 space-y-4" data-aos="fade-up">
          <h1 className="text-3xl lg:text-[55px]">Our Founder&apos;s Story</h1>
          <p className="text-[#0000007D] text-base lg:text-xl">
            Founded by Damilola Esan-Williams (formerly Fatunla) out of a deep
            passion to help people find their voice and purpose, the Foundation
            continues to inspire others to believe in themselves, and their
            dreams.
          </p>
        </div>
      </div>
      <div></div>
      <div className="px-6 md:px-10 overflow-clip">
        <div className="bg-[#000000] max-w-[1300px] m-auto p-6 lg:p-10 rounded-2xl lg:rounded-4xl space-y-5 lg:space-y-17.5 lg:relative">
          <div className="space-y-5 lg:space-y-10">
            <h4 className="text-[#DFB058] text-xs">Get Involved</h4>
            <div className="lg:w-2/5 md:w-3/5 space-y-5">
              <h1 className="text-white text-3xl lg:text-5xl">
                You&apos;re Not Alone on This Journey
              </h1>
              <p className="text-[#FFFFFFBA] ">
                Partner, donate, or sponsor an outreach. Together, we can build
                confidence, inspire purpose, and transform lives through the
                power of communication.
              </p>
            </div>
          </div>
          <Link
            href={"mailto:theleadfoundationng@gmail.com"}
            className={`${buttonVariants()}`}
          >
            Send us an Email
          </Link>
          <Image
            src={"/illustration.svg"}
            alt=""
            width={1000}
            height={1000}
            className="lg:absolute -right-24 h-[300px] bottom-0 lg:h-[350px] xl:h-[400px] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
