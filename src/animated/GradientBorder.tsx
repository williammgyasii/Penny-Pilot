// https://cruip-tutorials.vercel.app/cards-hover-effect/
import Image from "next/image";
import React from "react";

function GradientBorder({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] 
    rounded-xl border border-transparent animate-border p-2"
    >
      {children}
    </div>
  );
}

export default GradientBorder;
