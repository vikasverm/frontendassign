// src/components/BookshelfPage.js
import React, { useEffect, useState } from 'react';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    return (
        <div>
        
            <div className="book-list">
                {bookshelf.map((book, index) => (
                    <div key={index} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Edition Count: {book.edition_count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookshelfPage;
