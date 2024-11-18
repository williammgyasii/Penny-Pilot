import { Loader2, LoaderCircle } from "lucide-react";
import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function Spinner({ size = 24, color = "white" }: SpinnerProps) {
  return (
    <div className="inline-flex items-center justify-center">
      <LoaderCircle size={size} color={color} className="animate-spin" />
    </div>
  );
}
