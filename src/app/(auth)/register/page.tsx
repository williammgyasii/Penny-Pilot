import { Metadata } from "next";
import React from "react";
import registerBackground from "@public/Fintap.png";
import Image from "next/image";
import TextGradient from "@/animated/TextGradient";
import RegisterForm from "./_components/RegisterForm";

export const metadata: Metadata = {
  title: "Register Page",
  description: "Getting started to financial freedom",
  keywords: ["penny pilot", "register"],
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-ui-ui_light_200 grid grid-cols-8 p-2 lg:space-x-1 md:space-x-4">
      <div className="col-span-8 md:col-span-4 h-[20rem] md:h-full bg-yellow-900 relative rounded-xl overflow-hidden">
        <Image
          fill
          src={registerBackground}
          className="w-full h-full object-cover z-10"
          alt="Register Background"
          sizes={"auto"}
          priority={true}
        />
        {/* Gradient */}
        <div className="absolute z-10 inset-0 bg-gradient-to-t from-black  to-black/30 opacity-95"></div>

        {/* Text Content */}
        <div className="absolute z-30  bottom-3 md:bottom-12 xl:bottom-40  md:left-5 w-full md:w-[80%]">
          <h1 className="text-center text-4xl md:text-left md:text-7xl lg:text-8xl font-poppins  font-medium md:leading-[3.7rem] lg:leading-[5rem] tracking-normal lg:tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-800">
            Chart a course to financial freedom
            <span className="inline-block text-base md:text-2xl tracking-normal text-white">
              —starting with a penny!
            </span>
          </h1>

          <blockquote className="text-center inline-block mt-5 w-[95%] italic text-xs md:text-sm font-medium font-poppins text-white">
            {`"The habit of saving is itself an education; it fosters every
            virtue, teaches self-denial, cultivates the sense of order, trains
            to forethought, and so broadens the mind" - T.T. Munger`}
          </blockquote>
        </div>
      </div>

      <div className="col-span-8 md:col-span-4 h-full lg:-ml-2 py-5 md:py-[4rem]">
        <div className="flex flex-col items-center justify-center w-full lg:px-[3rem] xl:px-[5rem]">
          <TextGradient
            text="Create Account"
            subtitle="Getting started on your path to freedom"
          />
          <RegisterForm />
          {/* <RegisterForm /> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
