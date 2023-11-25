import React from "react";

export function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 28 28"
    >
      <path
        fill="none"
        stroke="#121211"
        className="dark:stroke-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 8h22M5 16h22M5 24h22"
      />
    </svg>
  );
}
