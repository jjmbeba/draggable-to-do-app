"use client";

import ToDoList from "@/src/components/ToDoList";
import Header from "@/src/components/Header";
import { useTheme } from "next-themes";

export default function Home() {

  const {theme} = useTheme();

  return (
    <main className='w-screen pb-[572px] z-0 overflow-hidden'>
      <Header />
      <div className="relative">
        <div className="absolute -top-7 lg:-top-14 inset-x-[24px]">
          <ToDoList />
        </div>
      </div>
    </main>
  );
}
