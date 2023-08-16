import { useState } from "react";
import { BOOKS_PER_PAGE } from "@/data/data";

function BookPreview(props) {
  const { books, authors } = props;

  const [page, setPage] = useState(BOOKS_PER_PAGE);

  const booksShown = books.slice(0, page);

  const remaining = books.length - booksShown.length;

  const bookCard = booksShown.map((book) => (
    <button key={book.id} className="preview">
      <img className="preview__image" src={book.image} />

      <div className="preview__info">
        <h3 className="preview__title">{book.title}</h3>
        <div className="preview__author">{authors[book.author]}</div>
      </div>
    </button>
  ));

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
