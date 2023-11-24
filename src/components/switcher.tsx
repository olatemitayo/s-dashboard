import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import React from "react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <figure className="border border-[#ccc] rounded-lg p-2 justify-between flex">
      <div
        className="p-1 px-5 rounded-lg bg-[#ccc] justify-center cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <Sun1 size={20} />
      </div>
      <div
        className="p-1 px-5 rounded-lg iflex justify-center cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        <Moon size={20} color={resolvedTheme === "light" ? "#000" : "#fff"} />
      </div>
    </figure>
  );
}
