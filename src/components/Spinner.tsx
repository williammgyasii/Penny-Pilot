import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function Spinner({
  size = 24,
  color = "white",
  strokeWidth = 4,
}: SpinnerProps) {
  return (
    <div className="inline-flex items-center justify-center">
      <svg
        className="animate-spin"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <path
          className="opacity-75"
          fill={color}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}
