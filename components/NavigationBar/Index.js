import {books,authors,genres} from '@/data/data';

/**
 * @typedef {object} Filters
 * @property {string | null} title
 * @property {string | 'any'} author
 * @property {string | 'any'} genre
 */

/**
 * ...
 * 
 * @param {Book[]} book 
 * @param {Filters} filters
 * @returns {Book[]}
 */
export const filter = (books, filters) => {
    let result = [];

    for (const book of books) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.author === 'any' || book.author === filters.author;
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
            if (genreMatch) break;

            if (singleGenre === filters.genre) {
                genreMatch = true;
            }
        }

        if (titleMatch && authorMatch && genreMatch) {
            result.push(book);
        }
    }

    return result;
};
export const filters ={
    title: '',
    authors:'any',
    genres:'any',
}

export const css = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    }
};

/**
 * @param {'day' | 'night'} theme
 */
export const setTheme = (theme) => {
    document.documentElement.style.setProperty('--color-dark', css[theme].dark);
    document.documentElement.style.setProperty('--color-light', css[theme].light);
};

/**
 * @param {SubmitEvent} event
 * @returns {object}
 */
export const convertSubmit = (event) => {
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    return result;
};

/**
 * 
 * @returns {boolean}
 */
export const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * @param {string} attribute 
 */
export const getDOM = (attribute) => {
    const result = document.querySelector(`[data-${attribute}]`);
    if (!result) throw new Error(`"[data-${attribute}]" is required in HTML`);
    return result;
};
