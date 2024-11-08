"use client";
import React from "react";

const GradientBlobs = () => {
  return (
    <>
      

      {/* Secondary blob */}
      <div
        className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[400px] rounded-full
        bg-purple-500/30 
        blur-3xl 
        animate-[pulse_10s_ease-in-out_infinite]
        hover:bg-purple-500/40 transition-colors duration-500"
      />

      {/* Accent blob */}
      <div
        className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px] rounded-full
        bg-cyan-500/30 
        blur-3xl 
        animate-[pulse_12s_ease-in-out_infinite]
        hover:bg-cyan-500/40 transition-colors duration-500"
      />
    </>
  );
};

export default GradientBlobs;
