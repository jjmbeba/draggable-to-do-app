"use client";

import React, { HTMLProps } from "react";
import { useStore } from "../lib/store";
import { useTheme } from "next-themes";
import FilterChoice from "./FilterChoice";

interface Props extends HTMLProps<HTMLUListElement> {}

const FilterPicker = ({ className }: Props) => {
  const { theme } = useTheme();

  return (
    <ul
      className={`flex justify-center items-center gap-5 ${
        theme === "light" ? "bg-white" : "bg-[#25273D]"
      }  ${className}`}
    >
      <FilterChoice title="All"/>
      <FilterChoice title="Active"/>
      <FilterChoice title="Completed"/>
    </ul>
  );
};

export default FilterPicker;
