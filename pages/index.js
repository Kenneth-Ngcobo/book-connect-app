import ListPreview from "@/components/ListPreview";
import Filter from "@/components/NavigationBar/Filter";
import MainHeader from "@/components/NavigationBar/MainHeader";
import Theme from "@/components/NavigationBar/Theme";
import { useState } from "react";

function BookApp() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const [filteredBooks, setFilteredBooks] = useState([]);

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const updateBooks = (books) => {
    setFilteredBooks(books);
  };

  return (
    <>
      <MainHeader
        openFilter={openFilter}
        openTheme={() => setIsThemeOpen(true)}
      />
      <Filter
        isFilterOpen={isFilterOpen}
        closeFilter={() => setIsFilterOpen(false)}
        updateBooks={updateBooks}
      />
      <Theme
        isThemeOpen={isThemeOpen}
        closeTheme={() => setIsThemeOpen(false)}
      />
      <ListPreview books={filteredBooks}/>
    </>
  );
}

export default BookApp;
