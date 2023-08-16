import { useState } from "react";
import { books, BOOKS_PER_PAGE } from "@/data/data";
import BookCard from "./BookCard";
import ShowMore from "@/components/ShowMore";

function BookPreview() {
  const [page, setPage] = useState(BOOKS_PER_PAGE);

  const booksShown = books.slice(0, page);

  const bookCard = booksShown.map((book) => (
    <BookCard key={book.id} book={book} />
  ));

  const booksToShow = (page) => {
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
        booksToShow={booksToShow}
        booksShown={booksShown}
      />
    </main>
  );
}

export default BookPreview;
