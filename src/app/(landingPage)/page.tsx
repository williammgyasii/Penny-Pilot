import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center text-6xl space-y-10">
      <h1>Added Homepage For Launch</h1>
      <Link href={"/about"} className={buttonVariants({ variant: "default" })}>
        Click here
      </Link>
    </div>
  );
};

export default LandingPage;
