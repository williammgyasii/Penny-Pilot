import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { CurrentUsers } from "@/lib/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

const ReviewCard = () => {
  return (
    <div>
      {secondRow.map((item, index) => (
        <figure
          key={index}
          className={cn(
            "relative w-64 bg-ui-ui_dark_600 text-white cursor-pointer overflow-hidden rounded-xl px-5 py-4 mx-2 space-y-4",
            // light styles
            " hover:bg-ui-ui_dark_400",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          )}
        >
          <blockquote className="mt-2 text-sm">{item.body}</blockquote>
          <div className="flex flex-row items-center gap-2 ">
            <Image
              className="rounded-full"
              width="40"
              height="40"
              alt=""
              src={item.img}
            />
            <div className="flex flex-col ml-2 ">
              <figcaption className="text-sm font-medium font-poppins dark:text-white">
                {item.name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">
                {item.username}
              </p>
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
};

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
        justify-center overflow-hidden py-3 group"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>

          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, index) => (
              <ReviewCard key={`first-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default TestimonialsSection;
