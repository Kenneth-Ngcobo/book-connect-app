import { authors } from "@/data/data";

function BookCard(props) {
  const { book } = props

  const showDetails = () => {
    console.log(book.title)
  }

  return (
    <button key={book.id} className="preview" onClick={showDetails}>
      <img className="preview__image" src={book.image} />

      <div className="preview__info">
        <h3 className="preview__title">{book.title}</h3>
        <div className="preview__author">{authors[book.author]}</div>
      </div>
    </button>
  );
}

export default BookCard;
