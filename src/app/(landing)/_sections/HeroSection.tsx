import React from "react";
import SectionLayout from "../_components/SectionLayout";
import heroSection from "@public/Fintap.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <SectionLayout
      withPadding
      className="min-h-screen overflow-hidden text-white bg-ui-ui_dark_700 "
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex flex-col justify-start items-center">
          <h1 className="text-5xl font-bold">Penny Pilot</h1>
          <p className="text-xl">
            A cutting-edge digital platform for managing personal finances
          </p>
        </div>

        <div className="max-w-[50rem] [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
          <Image
            src={heroSection}
            className="rounded-2xl"
            alt="Hero Illustration"
          />
        </div>

      </div>
    </SectionLayout>
  );
};

export default HeroSection;
