import { useState } from "react";
import { BOOKS_PER_PAGE } from "@/data/data";
import BookCard from "./BookCard";

function BookPreview(props) {
  const { books } = props;

  const [page, setPage] = useState(BOOKS_PER_PAGE);

  const booksShown = books.slice(0, page);

  const remaining = books.length - booksShown.length;

  const bookCard = booksShown.map((book) => <BookCard key={book.id} book={book} />);

  const showMore = () => {
    setPage((prevPage) => {
      return prevPage + BOOKS_PER_PAGE
    })
  }

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

      {remaining > 0 && (
        <button
          className="list__button"
          onClick={showMore}
          disabled={booksShown.length === 0}
        >
          <span>Show more</span>
          <span className="list__remaining"> ({remaining})</span>
        </button>
      )}
    </main>
  );
}

export default BookPreview;
