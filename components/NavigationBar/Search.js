import Link from "next/link";
import { Fragment, useState } from "react";
import{authors,genres, books} from "@/data/data";
import{convertSubmit}from"@/components/NavigationBar/Index";

export default function Search({getSearchResults}){
    const [query, setQuery] = useState('');

const handleSearchSubmit = async (event)=>{

    event.preventDefault();
    const response = await fetch(`/search?q=${convertSubmit(query)}`);
    const results = await response.text(authors,genres,books);
    // getSearchResults(results)
    console.log(results);
  };
{
    return (
        <Fragment>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" value={query} onChange={(event)=> setQuery(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </Fragment>
    )

}
}