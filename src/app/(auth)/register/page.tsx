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
    <div className="min-h-screen  grid grid-cols-8 p-2">
      <div className="col-span-8 md:col-span-3 lg:col-span-4 h-full bg-yellow-900 relative rounded-xl overflow-hidden">
        <Image
          fill
          src={registerBackground}
          className="w-full h-full object-cover"
          alt="Register Background"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>

        {/* Text Content */}
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
