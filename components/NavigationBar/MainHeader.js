


// components/NavigationLayout.js

import Link from 'next/link';
import { isDarkMode, setTheme,css,filter, convertSubmit, filters } from '../NavigationBar/Index';
import {} from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import {authors,genres} from '@/data/data';


const MainHeader = ({ children }) => {
  const toggleTheme = () => {
    const newTheme = getComputedStyle(document.documentElement).getPropertyValue('--color-dark') === css.day.dark ? 'night' : 'day';
    setTheme(newTheme);
  };
  const router= useRouter();

  const handleSearchSubmit = (event)=>{
    event.preventDefault();
    const formData = convertSubmit(event);
    const searchQuery = formData.search;
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const [selectedFilter, setSelectedFilter] = useState('all');
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const handleFilterChange = (event) => {
    event.preventDefault();

    selectedFilter === 'author'
    ? filter(book, {...appliedFilters, author:''})
    :selectedFilter === 'genre'
    ? filter(books, {...appliedFilters,genre:''})
    :(()=>{
      setSelectedFilter('all');
      setAppliedFilters(filters);

    })();
   
  };

  return (
    <div className='header'>
      <nav>
        <Link href="/">Home</Link>
        <button onClick={toggleTheme}>Theme</button>
        {/* <select onChange={handleFilterChange}>
          <option value="all">All Filters</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select> */}
      
      <div>
      <form onSubmit={handleSearchSubmit}>
          <input type="text" name="search" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
      </nav>
      {children}
    </div>
  );
};

export default MainHeader;


