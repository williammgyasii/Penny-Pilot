import { Metadata } from "next";
import React from "react";
import registerBackground from "@public/Fintap.png";
import Image from "next/image";

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
        <div className="absolute z-30 bottom-40  w-[70%]">
          <h1 className="text-left text-5xl  font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-200">
            Chart a course to financial freedom—starting with a penny!
          </h1>
          <blockquote className="text-center text-xs text-white">
            The habit of saving is itself an education; it fosters every virtue,
            teaches self-denial, cultivates the sense of order, trains to
            forethought, and so broadens the mind
          </blockquote>
        </div>
      </div>

      <div className="col-span-8 md:col-span-5 lg:col-span-4 h-full -ml-2">
        <h1 className="text-center text-4xl font-bold text-white">
          Register Pagea
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;
