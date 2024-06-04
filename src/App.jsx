
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookshelfPage from './components/BookshelfPage';
import "./App.css"
import { Link } from 'react-router-dom';
function App() {
  const addToBookshelf = (book) => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!storedBooks.some((b) => b.key === book.key)) {
        storedBooks.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(storedBooks));
    }
};
  return (
    <BrowserRouter>
 <nav className="nav-center">
                    <Link to="/">Search Books</Link>
                    <Link to="/bookshelf">My Bookshelf</Link>
                </nav>
<Routes>
<Route path="/" element={                  <SearchPage addToBookshelf={addToBookshelf} />} />
<Route path="/bookshelf" element={ <BookshelfPage />} />


</Routes>

</BrowserRouter>
  );
}

export default App;
