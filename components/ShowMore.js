import { useState } from "react";
import { BOOKS_PER_PAGE } from "@/data/data";
import { useEffect } from "react";

function ShowMore(props) {
  const { booksLength, numberOfBooks, displayedLength } = props;

  const [page, setPage] = useState(BOOKS_PER_PAGE);
  
  let remaining = booksLength - page;
  if(remaining<0) {
    remaining = 0
  }

  const showMore = () => {
    
    setPage((prevPage) => {
      return prevPage + BOOKS_PER_PAGE;
    });
  };

  useEffect(() => {
    numberOfBooks(page)
  }, [page]);

  return (
    <>
      { (
        <button className="list__button" onClick={showMore} disabled={displayedLength === 0 || remaining === 0}>
          <span>Show more</span>
          <span className="list__remaining"> ({remaining})</span>
        </button>
      )}
    </>
  );
}

export default ShowMore;
