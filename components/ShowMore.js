import { useState } from "react";
import { BOOKS_PER_PAGE } from "@/data/data";
import { useEffect } from "react";

function ShowMore(props) {
  const { booksLength, booksToShow, booksShown } = props;

  const [page, setPage] = useState(BOOKS_PER_PAGE);

  const remaining = booksLength - page;

  const showMore = () => {
    setPage((prevPage) => {
      return prevPage + BOOKS_PER_PAGE;
    });
  };

  useEffect(() => {
    booksToShow(page)
  }, [page]);

  return (
    <>
      {remaining > 0 && (
        <button className="list__button" onClick={showMore} disabled={booksShown.length === 0}>
          <span>Show more</span>
          <span className="list__remaining"> ({remaining})</span>
        </button>
      )}
    </>
  );
}

export default ShowMore;
