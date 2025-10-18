"use client";
import { abel, manrope } from "@/app/fonts";
import { useState } from "react";
import { Button } from "../ui/button";

interface Question {
  option: string;
  optionPosition: "a" | "b" | "c" | "d";
  correctAnswer: boolean;
}

const Knowledge = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const questions: Question[] = [
    {
      option: "You are",
      optionPosition: "a",
      correctAnswer: false,
    },
    {
      option: "You all",
      optionPosition: "b",
      correctAnswer: true,
    },
    {
      option: "We all",
      optionPosition: "c",
      correctAnswer: false,
    },
    {
      option: "They all",
      optionPosition: "d",
      correctAnswer: false,
    },
  ];

  const handleAnswerClick = (index: number) => {
    if (selectedIndex !== null) {
      return;
    }
    setSelectedIndex(index);
  };
  return (
    <div className="my-20 max-w-[1300px] m-auto space-y-10 px-6 md:px-10 xl:px-0 ">
      <h1
        className={`text-2xl w-1/2 m-auto uppercase lg:text-3xl xl:text-4xl text-center text-shadow-[#DFB058] text-shadow-2xs text-[#5083C2] font-semibold ${manrope.className}`}
      >
        Lesson of the week
      </h1>
      <div></div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div
          className={`${abel.className} w-11/12 space-y-4`}
          data-aos="zoom-in"
        >
          <h1 className="uppercase text-2xl">Understand COLLOQUIALISM</h1>
          <div className="text-lg space-y-4">
            <p>
              Colloquialisms are informal expressions used in everyday
              conversation, often specific to a region or culture. <br />
              Example:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Y&apos;all (Southern US) - a colloquial contraction of &apos;you
                all&apos;.
              </li>
              <li>Y&apos;all coming to the party tonight?</li>
            </ul>
          </div>
          <p className="text-lg">
            Colloquialisms are used in informal conversations, such as with
            friends, family, or in casual settings. This allows for a more
            relaxed and friendly tone in communication.
          </p>
          <p>
            NB: Using colloquialisms can be a way to connect with people from a
            specific region or culture. They often reflect the unique
            characteristics, traditions, and history of a particular area or
            community.
          </p>
        </div>
        <div className="px-5 space-y-5" data-aos="fade-left">
          <h1 className={`${abel.className} font-semibold uppercase text-xl`}>
            Brain teaser
          </h1>
          <div className=" border-[#5083C2] border-2 rounded-xl overflow-clip ">
            <div className="p-4 bg-[#5083C2] text-white flex items-center justify-between">
              <p>What does &quot;Y&apos;all&quot; mean</p>
              {selectedIndex !== null && (
                <Button
                  className="bg-black"
                  onClick={() => setSelectedIndex(null)}
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="p-5 space-y-3">
              {questions.map((question, index) => {
                const isSelected = selectedIndex === index;
                const isCorrect = question.correctAnswer;
                const showGreen = isCorrect && selectedIndex !== null;
                const showRed = isSelected && !isCorrect;

                return (
                  <div
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    className={`rounded-2xl border p-3 flex items-center gap-2 cursor-pointer
        ${showGreen ? "border-green-500 bg-green-100 text-green-500" : ""}
        ${showRed ? "border-red-500 bg-red-100 text-red-500" : "border-black"}
      `}
                  >
                    <p>{question.optionPosition})</p>
                    <p>{question.option}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
