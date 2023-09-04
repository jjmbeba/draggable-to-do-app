"use client";

import React from 'react'
import LogoSwitcher from './LogoSwitcher'
import TodoInput from './TodoInput'
import { useTheme } from 'next-themes';

type Props = {}

const Header = (props: Props) => {

    const {theme} = useTheme();

  return (
    <div className={`w-full h-[200px] overflow-x-hidden lg:h-[300px] bg-no-repeat bg-cover ${theme === 'dark' ? 'bg-dark lg:bg-dark-lg' : 'bg-light lg:bg-light-lg'}`}>
        <section className="px-[24px] overflow-x-hidden lg:px-[450px] pt-[48px] lg:pt-[75px] ">
          <LogoSwitcher />
          <TodoInput />
        </section>
      </div>
  )
}

export default Header