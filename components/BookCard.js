import { authors } from "@/data/data";
import BookPopUp from "./BookPopUp";
import { useState } from "react";

function BookCard(props) {
  const { book } = props;
  const bookWithAuthor = {...book, author: authors[book.author]}
  //console.log(book)
  const [isOpen, setIsOpen] = useState(false)

  const showDetails = () => {
    setIsOpen(true)
  };

  return (
    <div>
      <button key={bookWithAuthor.id} className="preview" onClick={showDetails}>
        <img className="preview__image" src={bookWithAuthor.image} />

        <div className="preview__info">
          <h3 className="preview__title">{bookWithAuthor.title}</h3>
          <div className="preview__author">{bookWithAuthor.author}</div>
        </div>
      </button>
      <BookCard closeModal={() => setIsOpen(false)} book={bookWithAuthor} isOpen={isOpen}/>
    </div>
  );
}

export default BookCard;
