import { inter, manrope } from "@/app/fonts";
import Link from "next/link";

const ReadersCohort = () => {
  return (
    <div className="bg-[#063979] bg-[url(/movement-bg.png)] bg-cover bg-center py-[50px] px-7 lg:px-0">
      <div className="text-white m-auto max-w-[752px] text-center space-y-5 ">
        <h1
          className={`text-xl lg:text-2xl font-extrabold uppercase  ${manrope.className}`}
        >
          Join our Readers Cohort
        </h1>
        <div className="space-y-2.5">
          <p
            className={`text-md lg:text-lg font-light italic ${inter.className}`}
          >
            Join the 21 days Reading, Writing, Speaking and Personal Development
            drill
          </p>
          <p className={`text-base lg:text-lg ${inter.className}`}>
            Build reading confidence, author a book in 21 days, learn
            international languages, and unlock your potential with our
            transformative program.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link
          className={`h-9 px-4 py-2 rounded-md bg-[#F6FDFF] border-[#5083C2] font-semibold cursor-pointer text-[#5083c2] hover:bg-[#D9F1FF] hover:border-[#5083C2]`}
          href={`https://wa.me/+2348065817154?text=${"Hello, Lizdachris. I am____ (your name), and I'd like to be a part of the Readers Cohort. I'm up for the 21 days training, kindly send me the registration form."}`}
          target="_blank"
        >
          Register today
        </Link>
      </div>
    </div>
  );
};

export default ReadersCohort;
