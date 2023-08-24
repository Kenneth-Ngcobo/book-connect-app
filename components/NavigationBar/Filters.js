import { Fragment, useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import {authors,genres} from "@/data/data"


const [selectedFilter, setSelectedFilter] = useState('all');
const [appliedFilters, setAppliedFilters] = useState(filters);

const filters ={
    title: '',
    authors:'any',
    genres:'any',
}

const BookFilter = (books, filters) => {
    let result = [];

    for (const book of books) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.authors === 'any' || book.author === filters.author;
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
            if (genreMatch) break;

            if (singleGenre === filters.genres) {
                genreMatch = true;
            }
        }

        if (titleMatch && authorMatch && genreMatch) {
            result.push(book);
        }
    }

    return result;
};
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

  return(
    <Fragment>
    
    </Fragment>
  )