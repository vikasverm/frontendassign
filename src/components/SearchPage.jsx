// src/components/SearchPage.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';


const SearchPage = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const searchBooks = async (q) => {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
        setBooks(response.data.docs);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            searchBooks(value);
        } else {
            setBooks([]);
        }
    };

    return (
        <div className="search-page">
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search by book name"
                className="search-input"
            />
            <div className="book-list">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
