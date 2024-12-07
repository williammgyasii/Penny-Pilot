import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { CurrentUsers } from "@/lib/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "@/animated/Marquee";

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

// const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "bg-ui-ui_dark_500 hover:bg-gray-950/[.05]  ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const TestimonialsSection = () => {
  return (
    <SectionLayout
      withPadding
      className="bg-custom-gradient -mt-2 py-[4rem] px-0 md:!px-0 "
    >
      <div className="flex w-full flex-col items-center justify-center space-y-3  ">
        <h6 className="text-center text-white font-normal text-xl md:text-xl ">
          More than
          <span className="text-ui-ui_yellow_400">{` ${CurrentUsers}+ `}</span>
          users love their financial journey
        </h6>

        <div
          className="relative flex h-full w-full flex-col items-center 
        justify-center overflow-x-hidden py-3 text-white"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-800/60 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>

          {/* ACTUAL MARQUEE */}
          {/* <div
            className={
              "flex shrink-0 justify-around animate-marquee flex-row hover:[animation-play-state:paused] [animation-direction:reverse]"
            }
          >
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
            
          </div> */}

          <Marquee className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </SectionLayout>
  );
};

export default TestimonialsSection;
