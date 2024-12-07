"use client";
import { Metadata } from "next";
import React, { useState } from "react";
import registerBackground from "@public/Fintap.png";
import Image from "next/image";
import TextGradient from "@/animated/TextGradient";
import LoginForm from "../_components/LoginForm";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/reduxhooks";
import { LOGIN_EXISTING_USER } from "@/redux/functions/authFunctions";
import { addToast } from "@/redux/features/toastSlice";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

// export const metadata: Metadata = {
//   title: "Login Page",
//   description: "Getting started to financial freedom",
//   keywords: ["penny pilot", "register"],
// };

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(LOGIN_EXISTING_USER({ email, password })).unwrap();
      router.push("/dashboard");
    } catch (error) {
      console.log("Login error on login page", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error as string,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
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
            text="Welcome Back"
            subtitle="Login to continue with your financial discipline"
          />

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Log in</button>
          </form>
          {/* <LoginForm /> */}
          {/* <RegisterForm /> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
