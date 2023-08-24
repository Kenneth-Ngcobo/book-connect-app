


// components/NavigationLayout.js

import Link from 'next/link';
import { isDarkMode, setTheme,css } from '../NavigationBar/Index';
import {} from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Search from './Search';


const MainHeader = ({ children }) => {
  const toggleTheme = () => {
    const newTheme = getComputedStyle(document.documentElement).getPropertyValue('--color-dark') === css.day.dark ? 'night' : 'day';
    setTheme(newTheme);
  };
  const router= useRouter();

 

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <button onClick={toggleTheme}>Theme</button>
      <Search></Search>
      </nav>
      {children}
    </div>
  );
};

export default MainHeader;


