"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";
import Moon from "@/public/moon.svg";
import Sun from "@/public/sun.svg";
import { useTheme } from "next-themes";

type Props = {};

const LogoSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between cursor-pointer ">
      <Image src={Logo} alt="logo" />
      {theme === "light" ? (
        <Image onClick={() => setTheme("dark")} src={Moon} alt="sun-icon" />
      ) : (
        <Image onClick={() => setTheme("light")} src={Sun} alt="sun-icon" />
      )}
    </div>
  );
};

export default LogoSwitcher;
