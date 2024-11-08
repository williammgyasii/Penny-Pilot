import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

function FeaturesCard() {
  return (
    <>
      <div className="w-[400px] relative mt-4 h-[400px] group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black ">
        <figure className="w-full h-full rounded-md  overflow-hidden">
          <Image
            src={
              "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format"
            }
            alt="shoes"
            width={600}
            height={600}
            className="h-full w-full  scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300"
          />
        </figure>
        <div className="absolute top-0 left-0 w-full h-full  transition-all duration-300 bg-gradient-to-b from-[#02cc6e25] via-[#02cc6e5b]  to-[#02cc6e]"></div>
        <article className="p-4 space-y-2 absolute -bottom-10 group-hover:bottom-0 transition-all duration-300 ">
          <h1 className="text-2xl font-semibold capitalize w-[90%]">
            Learn why going to the mountains can change your thoughts and
            lifestyle forever
          </h1>
          <a
            href="#"
            className=" text-base dark:text-white text-blue-600 font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  "
          >
            Read Story
            <span>
              <ChevronsRight />
            </span>
          </a>
        </article>
      </div>
    </>
  );
}

export default FeaturesCard;
