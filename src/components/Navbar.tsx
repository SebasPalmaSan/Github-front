'use client'

import SunIcon from '@/components/icons/SunIcon';
import MoonIcon from '@/components/icons/MoonIcon';
import { useEffect, useState } from 'react';

const initialThemeState = () => {
  if(localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as 'light' | 'dark';
  }
  if(typeof window !== 'undefined'){
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
   return 'dark';
};
const Navbar = () => {

  const [theme, setTheme] = useState<'light' | 'dark'>(initialThemeState);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <header className='flex items-center space-x-2 mb-10'>
        <h1 className='flex-grow text-3xl font-bold text-gray-600 dark:text-white'>devfinder</h1>
        
            <span className="uppercase text-gray-600 dark:text-white">
              {theme === 'light' ? 'dark mode' : 'light mode'}
            </span>
            <button onClick={handleTheme}>
              {
                theme === 'light' ?
                <MoonIcon 
                className='fill-gray-600 dark:fill-white'
                height={25}
                />
                :
                <SunIcon 
                className='fill-gray-600 dark:fill-white'
                height={25}
                />
              }
                
            </button>
    </header>
  )
}

export default Navbar