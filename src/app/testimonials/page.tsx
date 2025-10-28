import { Minus } from "lucide-react";
import { dmSans } from "../fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - The LEAD Foundation",
  description:
    "Discover how our members unlocked their full potential—boosting reading comprehension, mastering writing and public speaking, and building lasting habits of discipline and time management.",
  openGraph: {
    title: "Testimonials- The LEAD Foundation",
    description:
      "Discover how our members unlocked their full potential—boosting reading comprehension, mastering writing and public speaking, and building lasting habits of discipline and time management.",
    type: "website",
  },
};

const Testimonial = () => {
  const test = [
    {
      body: "The LEAD Foundation has truly been a space of growth for me! I've learnt how to use idioms confidently and apply words in the right context. It’s more than just learning it’s a community that inspires and sharpens. Thank to the LEAD foundation for making growth so beautiful!",
      name: "Monioluwa Adebayo Dorcas",
    },
    {
      body: "I’m deeply grateful for the positive impact the Foundation has had on my journey. The LEAD Foundation focuses on enhancing English proficiency by training on key aspects of grammar and communication. Thank you, the LEAD Foundation, for empowering leaders to communicate with confidence and excellence.",
      name: "Peninah Nzambi Nzoka",
    },
    {
      body: "The LEAD Foundation has truly sharpened my mind. Each quiz challenges me, and every lesson fuels my desire to grow. There were moments I missed a few answers and told myself, “Next time, I must do better” and I did. That challenge sparked real change in me. Thank you for constantly pushing me to be better. ",
      name: "Osuntuyi Blessing.",
    },
    {
      body: "I want to say a big congratulations to the LEAD foundation on their 5th year anniversary they have been relentless, and their educative programs on understanding English and life better has helped, reminded me of things I had forgotten and things I do get wrong about English, through their posts and quizzes, it has been really helpful and educating.",
      name: "Victor Jonah.",
    },
    {
      body: "I am one of the silent followers of this Foundation. Thank you to the Team Lead for the opportunity to learn, unlearn, and relearn. Each day I look forward to a new post to learn from them. To the extent that two years ago, what was posted online was seen directly in my professional exam. With ease, I just ticked the answer. Thank you for the humanity.",
      name: " Nurse Oluwaseyi Olajumoke.",
    },
    {
      body: "I am one of the luckiest individuals to enjoy the daily teachings, sponsored by The LEAD Foundation. I have gained lots of knowledge, especially when it comes to punctuation marks, clauses, and how to easily communicate using simple yet precise grammar. The LEAD Foundation has shaped my grammatical life and has given me the boldness to speak fluently, write effortlessly, and express myself without fear of how to place my English or how to express myself using clear and precise words.",
      name: " Oko-uche Goodness.",
    },
    {
      body: "I've learnt a lot since following the lead foundation, ranging from learning new words, using of word correctly, thinking deeply, effective communication and lot more. Following the daily teaching also helps me to examine myself daily in any area I'm lagging and correct myself.",
      name: "Miracle Akinkunmi.",
    },
    // {
    //   body: "I enrolled in The Readers Cohort for the intellectual challenge, and it was one of my best decisions this year. The training completely transformed my time management, eliminating idle moments and teaching me to achieve more. Under the guidance of Director Fatunla Damilola and the executives, it became a home away from home—a training ground where I could showcase my talents, gain new perspectives, and dramatically improve my reading, writing, and speaking abilities.",
    //   name: "Ofiara Joy Amarachukwu",
    //   team: "Team Cider (Aug' 23 Edition) ",
    // },
    // {
    //   body: "I was inspired to join The Readers Cohort by a graduate's success story, and my own experience was both challenging and wonderfully rewarding. The program taught me the precise use of punctuation, how to maintain focus while reading, and significantly improved my writing and teamwork skills. I learned the power of intentionality and commitment, and I highly encourage anyone ready to improve their reading, writing, and public speaking to sign up for the next edition—it will be a transformative experience.",
    //   name: "Falola Tejumade  ",
    //   team: "Team Ocean (June' 24 Edition) ",
    // },
    // {
    //   name: "Alumona Oluomachi Esther",
    //   team: "Team Cyan (June' 24 Edition) ",
    //   body: "Readers Cohort has fundamentally transformed my writing and reading; I've become unconsciously conscious of proper punctuation, my reading capacity has greatly enhanced, and my self-esteem has soared. I am deeply grateful to Director Miss Damilola Fatunla for her vision and to all the executives, team leaders, and my accountability partner for their amazing efforts. I urge everyone: come and get your life changed by joining the next edition in August—don't miss this opportunity!",
    // },
    // {
    //   name: "Mumeh Bertrand",
    //   team: "Team Ginger (Aug' 23 Edition) ",
    //   body: "My experience at Readers Cohort has been truly amazing and memorable, providing the privilege of connecting with diverse personalities while I learned, unlearned, and relearned through various exercises like the morning SPARK and webinars. These significantly boosted my vocabulary, pronunciation, and punctuation—transforming my communication skills from poor to exponentially stronger. What stands out most is how the program prioritizes not only personal growth but spiritual growth as well. I am endlessly grateful to the Director and Executives for their incredible work; may God bless and prosper them all.",
    // },
    // {
    //   name: "Ojo Omowumi ",
    //   team: "Team Ginger (Aug' 23 Edition) ",
    //   body: "From day one, this training stretched me through disciplined routines like 5:30 am wake-ups and reading 40 pages daily, which profoundly improved my reading skills and vocabulary. The changes were evident as I transformed my weaknesses into strengths, avoided probation, and grew immensely in consistency and intentionality. I also made wonderful new friends on this journey and learned that with determination, focus, and God's lead, no mountain is too high to climb.",
    // },
    // {
    //   name: "Ajayi Olufemi ",
    //   team: "Team Regal (Oct '23 Edition) ",
    //   body: "Joining the Readers Cohort was one of my best recent decisions, pushing me to new levels of discipline and intentionality through its demanding 21-day regimen of reading, writing, and on-camera tasks. The experience revealed my untapped potential and taught me invaluable lessons in self-discipline, mindset, and time management. I am deeply grateful to the Director, Miss Oluwadamilola Fatunla, and all the Executives for their dedicated efforts. If you want transformative growth in reading, writing, speaking, and overall personal discipline, The Readers Cohort is the perfect place for you.",
    // },
    // {
    //   name: "Isaac Precious",
    //   team: "Team Ginger (Aug' 23 Edition) ",
    //   body: "My experience at Readers Cohort was intensely transformative, stretching me through 5 a.m. Spark Moments and sleepless nights that taught me consistency, time management, and self-discipline. I am deeply grateful to Director Miss Fatunla Damilola, the Executives, my Team Leader, and my accountability partner, Miss Oluwanisola Eunice, for their unwavering support and wisdom. Readers Cohort is truly a place to be trained, disciplined, and impacted—I highly encourage everyone to join the next edition and experience the immense value for themselves.",
    // },
    // {
    //   name: "Eze Chisom ",
    //   team: "Team Teal (Feb' 24 Edition) ",
    //   body: "Readers Cohort sparked a remarkable transformation in my life, teaching me cooperation, responsibility, and the graceful acceptance of correction. I became deeply intentional about managing my time and pursuing God's purpose for my life. My writing and speaking skills improved dramatically, reading became effortless, and I learned to take punctuation seriously. Above all, I was inspired by Director Miss Damilola's genuine love and intentionality, and I truly benefited from the life-changing books and meaningful connections I made. The change I've experienced has been nothing short of impressive.",
    // },
    // {
    //   name: "Adedoyin Ajao ",
    //   team: "Team Imperial (Oct '23 Edition) ",
    //   body: "Readers Cohort pulled me far beyond my comfort zone and into a journey of self-discovery, revealing capabilities I never knew I possessed. The training transformed my writing into an exciting skill and made proper punctuation second nature. More importantly, it instilled in me a profound sense of discipline, commitment, and time management. I am deeply grateful to the Director—a true inspiration whose God-given vision, zeal, and passion made this transformative experience a reality.",
    // },
    // {
    //   name: "Igbo Success ",
    //   team: "Team Jade (Feb' 24 Edition) ",
    //   body: "Through the Readers Cohort, I developed life-changing habits like waking up early without an alarm and starting my day with intentional, positive affirmations that set a joyful tone. I became more observant, learning daily lessons from my experiences, and achieved the unimaginable—reading four books in a single month. The training taught me efficient time management, self-respect, and the courage to distance myself from disrespectful environments. I am deeply and sincerely grateful for the profound impact this has had on my life. Thank you, Ma Damilola.",
    // },
    // {
    //   name: "Omotola Omotoso ",
    //   team: "Team Tiger (Aug' 23 Edition)",
    //   body: "The past 21 days with Readers Cohort were a masterclass in discipline and intentionality, completely transforming how I spend my time and energy. I’ve become highly conscious of punctuation, improved my reading accuracy and speed, and gained unshakable confidence in my ability to achieve any goal I set. Every activity was insightful and value-packed, and I’m deeply grateful to the Director and Executives for their supportive, disciplined, and loving guidance. If you desire to build capacity in reading, writing, speaking, and personal growth, I wholeheartedly recommend Readers Cohort—it’s truly top-notch.",
    // },
    // {
    //   name: "Irewole Emmanuel ",
    //   team: "Team Neon (June' 24 Edition)",
    //   body: "Inspired by a friend's achievement, I joined the Readers Cohort and it became one of my best decisions. The program was an incredible eye-opener, filled with dynamic sessions, inspiring camaraderie, and insightful discussions that deepened my love for literature. Most profoundly, it helped me overcome procrastination, instilling a discipline that has boosted my productivity and efficiency across all areas of my life.",
    // },
  ];
  const getBgColor = (index: number) => {
    const cyclePosition = index % 3;

    switch (cyclePosition) {
      case 0:
        return "bg-black text-white";
      case 1:
        return "bg-white text-[#1E1E1E]";
      case 2:
        return "bg-[#FFF5E4] text-[#514F6E]";
      default:
        return "";
    }
  };

  return (
    <div className="bg-[#498AC6]/8">
      <div className="max-w-[1300px] m-auto py-20  pt-[100px] lg:pt-[120px] px-10 xl:px-0 space-y-3.5">
        <h1
          className={`${dmSans.className} text-[#4591CA] text-lg uppercase font-bold  flex items-center gap-2`}
        >
          <Minus />
          Testimonials
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 ">
          <div className="row-span-2 space-y-3.5" data-aos="zoom-in">
            <h1 className={`${dmSans.className} font-bold text-4xl`}>
              Hear what our members say
            </h1>
            <p className={`${dmSans.className} text-lg text-[#5E6A95]`}>
              Don&apos;t just take our word for it. Here are a few (of many)
              reviews from our members.
            </p>
          </div>
          {test.map((item, index) => (
            <div
              className={`${getBgColor(
                index
              )} row-span-4 rounded-xl p-10 space-y-5 ${dmSans.className}`}
              key={index}
              data-aos="fade-up"
            >
              <p className="text-lg">{item.body}</p>

              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                {/* <p className="text-lg">{item.team}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
