import BookPreview from "@/components/BookPreview";
import { books, authors, genres } from "@/data/data";

function BookApp() {
  return (
    <>
      <div>This is the our awesome app</div>
      <BookPreview books={books} authors={authors}/>
    </>
  );
}

export default BookApp;
