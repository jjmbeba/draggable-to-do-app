"use client";

import React, { useState } from "react";
import Circle from "@/public/circle.svg";
import CircleDark from "@/public/circleDark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useStore } from "@/src/lib/store";

type Props = {};

const TodoInput = (props: Props) => {
  const [newTodo, setNewTodo] = useState("");
  const { theme } = useTheme();
  const { addTodo } = useStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="relative mt-[30px] lg:mt-[68px] md:w-full md:flex justify-center overflow-x-hidden">
      <input
        className={`w-full max-w-[540px] md:mx-auto py-[18px] px-[52px] lg:px-[4.5rem] rounded-[5px] ${
          theme === "light" ? "bg-white" : "bg-[#25273D]"
        }`}
        type="text"
        placeholder="Create a new todo"
        onKeyDown={handleKeyDown}
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <Image
        src={theme === "light" ? Circle : CircleDark}
        alt="circle-icon"
        className="absolute top-1/2 translate-y-[-50%] left-[20px] md:left-[110px] lg:left-10"
      />
    </div>
  );
};

export default TodoInput;
