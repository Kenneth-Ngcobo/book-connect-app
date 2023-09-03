import { books, authors, genres } from "@/data/data"
import { useEffect } from "react";
import classes from "./Filter.module.css"

export default function Filter(props) {
  const { isFilterOpen, closeFilter, updateBooks } = props;

  useEffect(() => {
    updateBooks(books)
  },[])

  const authorsArray = [];
  const genresArray = [];

  const objectToArray = (object, array) => {
    for(let key in object) {
      let newObject = {}
      newObject.id = key
      newObject.value = object[key]
      array.push(newObject)
    }
  }

  objectToArray(authors, authorsArray)
  objectToArray(genres, genresArray)

  authorsArray.sort((a,b) => b.value > a.value ? -1 : 1)
  genresArray.sort((a,b) => b.value > a.value ? -1 : 1)

  const clearFilters = (event) => {
    event.target.reset()
    const filters = {title: "", genre: "All", author: "All"}
    filterBooks(filters)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const filters = Object.fromEntries(form)
    filterBooks(filters)
  }

  const filterBooks = (props) => {
    const { title, genre, author } = props
    console.log({ title, genre, author })
    let filteredBooks = [...books]
    if(!title || title.trim() != "") {
      filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
    }
    if(genre != "All") {
      filteredBooks = filteredBooks.filter(book => book.genres.includes(genre))
    }
    if(author != "All") {
      filteredBooks = filteredBooks.filter(book => book.author === author)
    }

    updateBooks(filteredBooks)
    closeFilter()
  }

 
  return (
    
      <div className={classes.filter_container}>
        {/*<dialog className="overlay" open={isFilterOpen}>*/}
        <form className={classes.filter} id="search" onSubmit={handleSubmit} onReset={clearFilters}>
          <label className={classes.label}>
            <span className="">Title</span>
            <input
              className={classes.filter_input}
              name="title"
              placeholder="Any"
            ></input>
          </label>

          <label className={classes.label}>
            <span className="">Genre</span>
            <select
              className={classes.filter_input}
              name="genre"
            >
              <option value="All">All Genres</option>
              {genresArray.map((genre) => (
                <option value={genre.id} key={genre.id}>{genre.value}</option>
              ))}
            </select>
          </label>

          <label className={classes.label}>
            <span className="">Author</span>
            <select
              className={classes.filter_input}
              name="author"
            >
              <option value="All">All Authors</option>
              {authorsArray.map((author) => (
                <option value={author.id} key={author.id}>{author.value}</option>
              ))}
            </select>
          </label>
        </form>

        <div >
        <button
            className={classes.button}
            type="submit"
            form="search"
          >
            Search
          </button>
          <button className={classes.button} type="reset" form="search">
            Clear Filters
          </button>
          
        </div>
        {/*</dialog>*/}
      </div>
    
  );
}