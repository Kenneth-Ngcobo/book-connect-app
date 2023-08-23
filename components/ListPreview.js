import { useEffect, useState } from "react";
import { books, BOOKS_PER_PAGE, authors } from "@/data/data";
import BookCard from "./BookCard";
import ShowMore from "@/components/ShowMore";

function ListPreview() {
  const [page, setPage] = useState(BOOKS_PER_PAGE); //initializes page which is then updated by ShowMore component

  const booksShown = books.slice(0, page);

  const bookCard = booksShown.map((book) => {
    //const bookWithAuthor = {...book, author: authors[book.author]}
   
    return <BookCard key={book.id} book={book} />;
  });

  /*useEffect(() => {
    console.log('authors = ', authors)
  },[])*/

  const numberOfBooks = (page) => {
    setPage(page);
  };

  return (
    <main className="list">
      <div className="list__items">{bookCard}</div>

      <div
        className={`
          list__message 
          ${booksShown.length === 0 ? "list__message_show" : ""}
        `}
      >
        No results found. Your filters might be too narrow.
      </div>

      <ShowMore
        booksLength={books.length}
        numberOfBooks={numberOfBooks}
        displayedLength={booksShown.length}
      />
    </main>
  );
}

export default ListPreview;
