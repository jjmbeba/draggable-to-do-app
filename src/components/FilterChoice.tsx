"use client";

import { useTheme } from 'next-themes';
import React from 'react'
import { useStore } from '../lib/store';

type Props = {
    title:'All'|'Active'|'Completed';
}

const FilterChoice = ({title}: Props) => {

    const [activeSelection, setActiveSelection] = useStore((state) => [
        state.activeSelection,
        state.setActiveSelection,
      ]);
      const { theme } = useTheme();

  return (
    <li
        onClick={() => setActiveSelection(title)}
        className={`${
          title === activeSelection
            ? "text-[#3A7CFD]"
            : `${theme === "light" ? "text-[#9495A5]" : "text-[#5B5E7E]"} hover:text-white cursor-pointer`
        }`}
      >
        {title}
      </li>
  )
}

export default FilterChoice