import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { CurrentUsers } from "@/lib/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MarqueeContent from "@/animated/MarqueeContent";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const TestimonialsSection = () => {
  return (
    <SectionLayout withPadding className="bg-custom-gradient -mt-2 py-[4rem]">
      <div className="flex w-full flex-col items-center justify-center space-y-3">
        <p className="text-center text-white font-normal text-xl md:text-xl">
          More than
          <span className="text-ui-ui_yellow_400">{` ${CurrentUsers}+ `}</span>
          users love their financial journey
        </p>

        <div
          className="relative flex h-full w-full flex-col items-center 
        justify-center overflow-x-hidden py-3 group"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>

          {/* ACTUAL MARQUEE */}

          <div className="flex w-max cursor-pointer animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            {[...firstRow, ...secondRow].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                
                <div className="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-6">
                  <div className="pb-4 font-light text-white/75">
                    {item.body}
                  </div>

                  <div className="mt-auto flex items-center gap-4">
                    <img src={item.img} className="h-9 w-9 rounded-full" />

                    <div className="flex flex-col text-sm">
                      <div className="text-white">{item.name}</div>

                      <div className="text-white/75">{item.body}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default TestimonialsSection;
