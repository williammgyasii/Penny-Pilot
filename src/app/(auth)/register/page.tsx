import { Metadata } from "next";
import React from "react";
import registerBackground from "@public/Fintap.png";
import Image from "next/image";
import TextGradient from "@/animated/TextGradient";
import RegisterForm from "./_components/RegisterForm";
import RegisterReactForm from "./_components/RegisterReactForm";

export const metadata: Metadata = {
  title: "Register Page",
  description: "Getting started to financial freedom",
  keywords: ["penny pilot", "register"],
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-ui-ui_light_200 grid grid-cols-8 p-2">
      <div className="col-span-8 md:col-span-3 lg:col-span-4 h-full bg-yellow-900 relative rounded-xl overflow-hidden">
        <Image
          fill
          src={registerBackground}
          className="w-full h-full object-cover z-10"
          alt="Register Background"
        />
        {/* Gradient */}
        <div className="absolute z-10 inset-0 bg-gradient-to-t from-black  to-black/30 opacity-95"></div>

        {/* Text Content */}
        <div className="absolute z-30 bottom-40 left-3  w-[80%]">
          <h1 className="text-left text-8xl font-poppins  font-medium leading-[5rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-800">
            Chart a course to financial freedom
            <span className="inline-block text-2xl tracking-normal text-white">
              —starting with a penny!
            </span>
          </h1>

          <blockquote className="text-center  mt-5 w-[95%] italic text-sm font-medium font-poppins text-white">
            {`"The habit of saving is itself an education; it fosters every
            virtue, teaches self-denial, cultivates the sense of order, trains
            to forethought, and so broadens the mind" - T.T. Munger`}
          </blockquote>
        </div>
      </div>

      <div className="col-span-8 md:col-span-5 lg:col-span-4 h-full -ml-2 py-[6rem]">
        <div className="flex flex-col items-center justify-center w-full space-y-1 px-[5rem]">
          <TextGradient
            text="Create Account"
            subtitle="Getting started on your path to freedom"
          />
          <RegisterReactForm />
          {/* <RegisterForm /> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
